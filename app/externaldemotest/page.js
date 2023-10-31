"use client";
import { useState, useEffect } from "react";

async function fetchRandomDog(breed) {
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error(error);
  }
}

async function fetchBreedList() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  return Object.keys(data.message);
}

/**
 * Renders a page with a random dog image and a dropdown list of dog breeds.
 * @returns {JSX.Element} The rendered page.
 */
export default function Page() {
    const [dog, setDog] = useState(null);
    const [breedList, setBreedList] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('affenpinscher');

    useEffect(() => {
        fetchRandomDog(selectedBreed).then(setDog);
        fetchBreedList().then(setBreedList);
    }, [selectedBreed]);

    /**
     * Updates the selected breed when the dropdown value changes.
     * @param {Object} event - The event object.
     */
    const handleBreedChange = (event) => {
        setSelectedBreed(event.target.value);
    };

    return (
        <main>
            <h1>Dogs!</h1>
            {dog && <img src={dog} alt="Dog" />}
            <select value={selectedBreed} onChange={handleBreedChange}>
                {breedList.map((breed) => (
                    <option key={breed} value={breed}>
                        {breed}
                    </option>
                ))}
            </select>
        </main>
    );
}