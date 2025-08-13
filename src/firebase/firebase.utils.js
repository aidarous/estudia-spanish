import { initializeApp } from "firebase/app";
import { collection, query, getDocs, getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDJz0K4uYiL3GjWaYpoZLDIzSn9is0D1-4",
    authDomain: "first-project-46991.firebaseapp.com",
    databaseURL: "https://first-project-46991.firebaseio.com",
    projectId: "first-project-46991",
    storageBucket: "first-project-46991.appspot.com",
    messagingSenderId: "811199697693",
    appId: "1:811199697693:web:c86a6b74d84dfc6ad047f4",
    measurementId: "G-K1W8RMW4VW"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export {db};
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//     const collectionRef = collection(db, collectionKey)
//     const batch = writeBatch(db)

//     objectsToAdd.forEach((object) => {
//         const docRef = doc(collectionRef, object.title.toLowerCase())
//         batch.set(docRef, object)

//     })

//     await batch.commit();
//     console.log('done');
// }

// export const getCategoriesAndDocuments = async () => {
//     const collectionRef = collection(db, 'categories');
//     const q = query(collectionRef); 

//     const querySnapshot = await getDocs(q)
//     const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
//         const {title, items} = docSnapshot.data();
//         acc[title.toLowerCase()] = items;
//         return acc;
//     }, {})
//     return categoryMap;
// }