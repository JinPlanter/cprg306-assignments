"use client"

import Item from "./item";

// import useState hook
import { useState } from "react";
// import items from json file
import items from "./items.json";




export default function ItemList(){
  // use useState hook to create a state variable called "sortBy" and it's setter function "setSortBy".
  const [sortBy, setSortBy] = useState("name");

  // Use JavaScript's sort function to sort the items array based on the sortBy state variable.
  if (sortBy === "name"){
    // items.sort() < this is the default sort function, which sorts by converting each item to a string and comparing the strings.
    // sort is a mutating function, which means it changes the original array. (map is a non-mutating function)
    // takes in 2 parameters. a and b are the 2 items being compared.
    // If [a < b] 'a' comes before 'b', if [a > b] 'a' comes after 'b', if [a === b] 'a' and 'b' are the same position.
    items.sort((a, b) => a.name.localeCompare(b.name));
  };
  if (sortBy === "category"){
    items.sort((a, b) => a.category.localeCompare(b.category));
  };

  // ternary functions
  // items.sort((a, b) => {return a < b ? -1 : 1});
  // if (a < b): return -1, if (a > b): return 1, if (a === b): return 0

  const handleName = () => {
    setSortBy("name");
  };

  const handleCategory = () => {
    setSortBy("category");
  };

  return (
    <>
      <button onClick={handleName}>Sort by name.</button>
      <button onClick={handleCategory}>Sort by category.</button>
      <ul>
        <li>
          {items.map((item) => (
            <Item key={item.id} name={name.id} quantity={quantity} category={category} />
          ))}
        </li>
      </ul>
    </>
  );
}