"use client";

import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import { useState } from 'react';
import MealIdeas from './meal-ideas';

export default function Page() {

  // constant [stateVariable(immutable), setStateVariable(updates state of stateVariable)] = useStateHook(stateVariable_InitialValue)
  // useState is a hook+function that defines and updates the state variable.
  // updating the state variable will cause React to auto-re-render the component.
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  // Pass the handleAddItem event handler to the NewItem component as a prop called onAddItem.
  function handleAddItem(item) {
    // add a new item to the `items` state variable
    setItems([...items, item]);
    // `...` is the spread operator that creates a new array with the existing items and the new item.
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

  return (
    
    <main className="bg-gray-900 text-white p-8">
      <h1 className="text-4xl mb-8 text-center">Shopping List</h1>

      <div className="flex">
        {/* Page title */}
        
        {/*
        NewItem component is:
        1. Rendered.
        2. Passed the handleAddItem function as a prop called onAddItem.
        */}
        <NewItem onAddItem={handleAddItem} />
        <br></br>
        {/*
        ItemList component is:
        1. Rendered.
        2. Passed the 'items' state variable as a prop called items.
        */}
        <ItemList items={items} onItemSelect={handleItemSelect} />

        {/* MealIdeas component is: */}
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}