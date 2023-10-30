// Define the Item component that receives an 'item' prop
export default function Item({ item }) {
  // Destructure the 'item' prop to access its properties
  const { name, quantity, category } = item;

  // Render the component with item details
  return (
    <div>
      <ol>
        <li className="text-red-300 bg-slate-800 border border-blue-800">
          {/* Display the item's name */}
          <p className="text-red-800">Name: {name}</p>

          {/* Display the item's quantity */}
          <p>Quantity: {quantity}</p>

          {/* Display the item's category */}
          <p>Category: {category}</p>
        </li>
      </ol>
    </div>
  );
}