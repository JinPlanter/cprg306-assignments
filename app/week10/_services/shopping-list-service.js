import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";
// import { Firestore } from "firebase/firestore";
import { firestore } from "firebase";

export const getItems = async (userId) => {
    /*
    async function retrieves all items for a specific user from Firestore. 
    It takes a userId as a parameter, and uses it to query a subcollection named items under a document in the users collection with the same userId. 
    It fetches the documents in the items subcollection, and for each document, it adds an object to the items array containing the document ID and data. 
    It then returns this items array.
    */
    try {
        const q = query(collection(db, "users", userId, "items"));
        const querySnapshot = await getDocs(q);

        const mappedItems = querySnapshot.docs.map((itemDoc) => ({
            id: itemDoc.id,
            ...itemDoc.data(),
        }));
        return mappedItems;
    } catch (fetchItemsError) {
        console.error("Error in fetchAllItems: ", fetchItemsError);
    }

};

export const getBlogPosts = async () => {
    try {
        const blogPostsCollectionsRef = collection(db, "blogPosts");
        // const blogPostsQuery = query(blogPostsCollectionsRef);

        const blogPostsSnapshot = await getDocs(blogPostsCollectionsRef);
        const mappedBlogPosts = blogPostsSnapshot.docs.map((postDoc) => ({
            id: postDoc.id,
            ...postDoc.data(),
        }));

        return mappedBlogPosts;
    } catch (fetchBlogPostsError) {
        console.error("Error in fetchAllBlogPosts: ", fetchBlogPostsError);
        console.log(fetchBlogPostsError);
    }
};

export const addItem = async (userId, item) => {
    /*
    This function adds a new item to a specific user's list of items in Firestore. 
    It takes a userId and an item as parameters. 
    It uses the userId to reference the items subcollection of a document in the users collection, and then adds the item to this subcollection. 
    It returns the id of the newly created document.
    */
    // const itemRef = collection(db, "users", userId, "items");
    try {
        const docRef = await addDoc(collection(db, "users", userId, "items"), item);

        const userItemsRef = firestore.collection("users").doc(userId).collection("items");
        await userItemsRef.doc(docRef.id).set(item);
        
    } catch (addItemError) {
        console.error("Error in addItem: ", addItemError);
    }
}