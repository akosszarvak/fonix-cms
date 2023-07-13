import firebase_app from "./config";
import { getFirestore, doc, getDocs, collection } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getDocument(collectionName) {
  // let docRef = doc(db, collection, id);

  let result = null;
  let error = null;
  try {
    result = await getDocs(collection(db, collectionName));
    result.forEach((data) => {
      console.log("there is data?", data);
    });
  } catch (e) {
    error = e;
  }
  return result;
}
