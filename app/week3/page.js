import PixelT from "./PixelT";
import ItemList from "./item-list";

// <Link href="./PixelT">PixelT</Link> // doesn't work.
export default function Page(){
  return(
    <main>
      <ItemList />
      
      <PixelT />
    </main>
  );
}