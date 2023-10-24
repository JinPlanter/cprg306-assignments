// Import necessary modules and components
import Link from 'next/link';
import ItemList from './item-list'; // Assuming this is the correct path to the ItemList component

// Define the Page component for Week 5
export default function Page() {
  return (
    <main className="bg-gray-900 text-white p-8">
      {/* Page title */}
      <h1 className="text-4xl mb-8 text-center">Shopping List</h1>

      {/* Render the ItemList component */}
      <ItemList />

      {/* Create a link to the home page */}
      <p className="text-center mt-4">
        <Link href="/" className="text-orange-400 hover:text-orange-600">
          Home
        </Link>
      </p>
    </main>
  );
}