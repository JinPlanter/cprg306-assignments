"use client";

import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { useState, useEffect } from 'react';
import { getItems, addItem } from '../_services/shopping-list-service';
import { useUserAuth } from '../_utils/auth-context';

export default function Page() {

  // constant [stateVariable(immutable), setStateVariable(updates state of stateVariable)] = useStateHook(stateVariable_InitialValue)
  // useState is a hook+function that defines and updates the state variable.
  // updating the state variable will cause React to auto-re-render the component.
  const [items, setItems] = useState([]); 
  const [selectedItemName, setSelectedItemName] = useState(null);
  const {user, firebaseSignOut} = useUserAuth();

  // Pass the handleAddItem event handler to the NewItem component as a prop called onAddItem.
  function handleAddItem(item) {


    if(user && user.id){
      addItem(user.id, item).then((id) => {
        // add a new item to the `items` state variable
        item.id = id;
        setItems([...items, item]);
        // `...` is the spread operator that creates a new array with the existing items and the new item.
      });
    }
  }


  // new event handler function "handleItemSelect"
  // "handleItemSelect" extracts the name of the selected item, cleans up/removes the emoji from the name, and updates the selectedItemName state variable.
  // "handleItemSelect" is passed to the ItemList component and is called when an item is selected.
  function handleItemSelect(item) {
    // extract the name of the selected item
    const name = item.name.split(" ")[0];
    // let name = item.name.split(",")[0].replace(/[^a-zA-Z ]/g, "").trim();
    // update the state variable
    setSelectedItemName(name);

    console.log(name);
  }

  /*
  Create an async function loadItems. 
  Inside this function, call the getItems function to get the shopping list items for the current user using user.uid as the userId. 
  Use setItems to set the state of items to the result of getItems.
  */
  async function loadItems() {
    /*
    Inside this function, call the getItems function to get the shopping list items for the current user using user.uid as the userId. 
    Use setItems to set the state of items to the result of getItems.
    */

    if (!user) return null;
    // return null if the user object doesn't exist.
    else if (user && !user.uid) return null;
    // return null if the user object exists but doesn't have a uid property.
    // this may or may not work/be necessary.
    else if (user.uid) {
      // user.id checks if the user is logged in.
      const items = await getItems(user.uid);
      setItems(items);
    }
  }

  async function addItem(item) {
    const newItems = await addItem(user.uid, item);
    setItems(newItems);
  }

  useEffect(() => {
    loadItems();
  }, [user?.uid]);

  return (
    <main className="bg-gray-900 text-white p-8">
      <h1 className="text-4xl mb-8 text-center">Shopping List</h1>

      <div className="flex flex-col">
        <div className="flex-item">
          {/*
          NewItem component is:
          1. Rendered.
          2. Passed the handleAddItem function as a prop called onAddItem.
          */}
          <NewItem onAddItem={handleAddItem} />
        </div>

        <div className="flex flex-row">
          <div className="flex-item">
            {/*
            ItemList component is:
            1. Rendered.
            2. Passed the 'items' state variable as a prop called items.
            */}
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          <div className="flex-item">
            {/* MealIdeas component is: */}
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}