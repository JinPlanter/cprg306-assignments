// Renders the new-item.js component in the browser:
import NewItem from "./new-item";
import ItemList from "./item-list";

export default function Page(){
    return(
      <main>
        <NewItem />

        <h1>Shopping List</h1>
        <ItemList />

        {/*
        NewItem component is:
        1. Rendered.
        2. Passed the handleAddItem function as a prop called onAddItem.
        */
        // <NewItem onAddItem={handleAddItem} />

        /*
        ItemList component is:
        1. Rendered.
        2. Passed the 'items' state variable as a prop called items.
        */
        // <ItemList items={items} />
        }
      </main>
    );
  }