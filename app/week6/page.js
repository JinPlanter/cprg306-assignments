"use client";

import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import React, { useState } from 'react';

// initialize state variable `items` with the items from items.json
// const items = itemsData.items;

// Define the Page component for Week 6
export default function Page() {

  // constant [stateVariable(immutable), setStateVariable(updates state of stateVariable)] = useStateHook(stateVariable_InitialValue)
  // useState is a hook+function that defines and updates the state variable.
  // updating the state variable will cause React to auto-re-render the component.
  const [items, setItems] = useState(itemsData.items);

  // Pass the handleAddItem event handler to the NewItem component as a prop called onAddItem.
  const handleAddItem = (item) => {
    // add a new item to the `items` state variable
    setItems([...items, item]);
    // `...` is the spread operator that creates a new array with the existing items and the new item.
  }

  return (
    <main className="bg-gray-900 text-white p-8">
      {/* Page title */}
      <h1 className="text-4xl mb-8 text-center">Shopping List</h1>

      {/*
      NewItem component is:
      1. Rendered.
      2. Passed the handleAddItem function as a prop called onAddItem.
      */}
      <NewItem onAddItem={handleAddItem} />
      

      {/*
      ItemList component is:
      1. Rendered.
      2. Passed the 'items' state variable as a prop called items.
      */}
      <ItemList items={items} />

      {/* Create a link to the home page */}
      <p className="text-center mt-4">
        <Link href="/" className="text-orange-400 hover:text-orange-600">
          Home
        </Link>
      </p>
    </main>
  );
}