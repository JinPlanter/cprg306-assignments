"use client";

import { useState } from "react";
import Item from './item';


/*
Replace all functions that mutate the items prop with versions that do not mutate the prop.
Instead, these functions should create a copy of items, perform any necessary operations on the copy, and use this copy for rendering.
*/


// Define the ItemList component
function ItemList({ items }) { // Destructure items from props object
  // State variables
  const [sortBy, setSortBy] = useState("name"); // Sorting preference
  const [groupBy, setGroupBy] = useState(false); // Grouping toggle

  // Sort items based on sorting preference
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      // Sort by name
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      // Sort by category
      return a.category.localeCompare(b.category);
    }
    // No sorting preference specified
    return 0;
  });

  // Group and sort items by category when grouping is enabled
  const groupedItems = groupBy
    ? sortedItems.reduce((acc, currentItem) => {
        const category = currentItem.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(currentItem);
        return acc;
      }, {})
    : { default: [...sortedItems] }; // Default category for non-grouped items

  // Render the component
  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Sorting and grouping buttons */}
        <button
          onClick={() => {
            setSortBy("name");
            setGroupBy(false); // Disable grouping when sorting by name
          }}
          className={`py-2 px-4 rounded ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-white text-black"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => {
            setSortBy("category");
            setGroupBy(false); // Disable grouping when sorting by category
          }}
          className={`py-2 px-4 rounded ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-white text-black"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setGroupBy(!groupBy)}
          className={`py-2 px-4 rounded ${
            groupBy ? "bg-blue-500 text-white" : "bg-white text-black"
          }`}
        >
          Group by Category
        </button>
      </div>
      <div>
        {/* Render items based on the grouping state */}
        {groupBy
          ? Object.keys(groupedItems).map((category) => (
              <div key={category}>
                {/* Display category name capitalized */}
                <h2 className="capitalize text-2xl mt-4">{category}</h2>
                {/* Render items within the current category */}
                {groupedItems[category].map((item) => (
                  // Render the Item component for the current item
                  <Item key={item.id} item={item} />
                ))}
              </div>
            ))
          : sortedItems.map((item) => (
              // Render the Item component for each item when not grouping
              <Item key={item.id} item={item} />
            ))}
      </div>
    </div>
  );
}

// Export the ItemList component as the default export
export default ItemList;