"use client";
// Import the useState hook from React.
// - built-in feature for adding and managing state to functional components.
import React, { useState } from "react";

export default function NewItem(props) {
    const { items = [], setItems } = props;

    // Initializing variables:
    // Name field.
    const [name, setName] = useState("");
    // Quantity field. Default value 1.
    const [quantity, setQuantity] = useState(1);
    // Category field. Default value Produce.
    const [category, setCategory] = useState("Produce");


    // Form submission handler.
    // Create a function to handle the submission of the form.
    function handleSubmit(e) {
        // HALT IN THE NAME OF THE LAW!
        e.preventDefault();
    
        // Create a new item object using the state variables.
        // Destructuring the object into distinct state variables.
        const newItem = {
        id: items ? items.length + 1 : 1,
        name,
        quantity,
        category
        };

        // Logs newItem object to the console when the form is submitted.
        console.log(newItem);

        // Displays an alert with the current state values.
        alert(`New item: ${name}, ${quantity}, ${category}`);
    
        // Update the items state variable using the setItems function.
        // setItems([...items, newItem]);
    
        // Reset the state variables to clear the inputs.
        setName("");
        setQuantity(1);
        setCategory("Produce");
    }
    
    return (
        <div>
            <h2>New Item</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input
                id="name"
                type="text"
                value={name}
                // onChange={handleNameChange}
                onChange={e => setName(e.target.value)}
                style={{ color: "#000000" }}
                />

                <label htmlFor="quantity">Quantity: </label>
                <input
                id="quantity"
                type="number"
                value={quantity}
                min="1"
                max="99"
                onChange={e => setQuantity(e.target.value)}
                style={{ color: "#000000" }}
                />

                <label htmlFor="category">Category: </label>
                <select
                id="category"
                value={category}
                onChange={e => setCategory(e.target.value)}
                style={{ color: "#000000" }}
                >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
                <button className="px-4 py-4 bg-purple-500 hover:bg-purple-400" type="submit">Add Item</button>
            </form>
        </div>
    );
}