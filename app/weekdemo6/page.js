"use client";

// Renders the new-item.js component in the browser:
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page(){
  
  // initialize state variable items with itemsData.
  const [items, setItems] = useState(itemsData);

  // Event handler function that adds a new item to items.
  // Add old items to the new items array using the spread operator.
  // Set newItem as the new state variable.
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };



    return(
      <main>
        {/*
        onAddItem is a prop that passes the handleAddItem function to the NewItem component.
        */}
        <NewItem onAddItem={handleAddItem} />

        <h1>Shopping List</h1>
        <ItemList items={items} />
      </main>
    );
  }