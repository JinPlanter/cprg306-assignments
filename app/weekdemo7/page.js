"use client";

import { useState } from 'react';

function GroceryList() {
  const [groceries, setGroceries] = useState([
    { id: 1, name: 'Apples' },
    { id: 2, name: 'Bananas' },
    { id: 3, name: 'Oranges' },
    { id: 4, name: 'Milk' },
    { id: 5, name: 'Bread' },
  ]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = item => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h2>Grocery List</h2>
      <ul>
        {groceries.map(item => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item)}
            style={{ backgroundColor: selectedItem === item ? 'lightblue' : 'white' }}
          >
            {item.name}
          </li>
        ))}
      </ul>
      {selectedItem && (
        <div>
          <h3>Selected Item:</h3>
          <p>{selectedItem.name}</p>
        </div>
      )}
    </div>
  );
}

export default GroceryList;