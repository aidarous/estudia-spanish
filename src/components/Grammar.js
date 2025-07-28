import React, {useState, useEffect} from 'react'

import { db } from '../firebase/firebase.utils'
import { getDocs, collection, doc, snapshotEqual } from 'firebase/firestore'
import { Box, CardContent, Typography } from '@mui/material'

// const fetchGrammarFromFirestore = async () =>{
//   const querySnapshot = await getDocs(collection(db, "grammar"))
//   const data =[]
//   querySnapshot.forEach((doc)=>{
//     data.push({ id:doc.id, ...doc.data()})
//   });
//   return data;
// }


const Grammar = () => {
  const [nounData, setnounData] = useState([]);

  useEffect(() =>{

    const fetchNounData = async () => {
      const parentDocRef = doc(db, "grammar", "unit1");
      const subColRef = collection(parentDocRef,"nouns")
      
      const snapshot = await getDocs(subColRef); 
      const data = snapshot.docs.map(doc =>({
        id: doc.id,
        ...doc.data()
      }));
      
      setnounData(data);
    };
    fetchNounData();
  },[])
  return (
    <div>
      <h1>Grammar</h1>
      <div>
        {nounData.map((nouns)=>(
            <p key={nouns.id}>{nouns.noun} - {nouns.translation}</p>
          ))}
      </div>
    </div>
    
  )
}

export default Grammar
