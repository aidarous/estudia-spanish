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
  const [verbData, setverbData] = useState([]);
  const [adjectiveData, setadjectiveData] = useState([]);

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

  useEffect(() =>{

    const fetchVerbData = async () => {
      const parentDocRef = doc(db, "grammar", "unit1");
      const subColRef = collection(parentDocRef,"verbs")
      
      const snapshot = await getDocs(subColRef); 
      const data = snapshot.docs.map(doc =>({
        id: doc.id,
        ...doc.data()
      }));
      
      setverbData(data);
    };
    fetchVerbData();
  },[])

  useEffect(() =>{

    const fetchAdjectiveData = async () => {
      const parentDocRef = doc(db, "grammar", "unit1");
      const subColRef = collection(parentDocRef,"adjectives")
      
      const snapshot = await getDocs(subColRef); 
      const data = snapshot.docs.map(doc =>({
        id: doc.id,
        ...doc.data()
      }));
      
      setadjectiveData(data);
    };
    fetchAdjectiveData();
  },[])
  return (
    <div className='box'>
      <h1>Grammar</h1>
      <div>
        <h2>Unit 1</h2>
        <div>
          <h3>Nouns</h3>
          {nounData.map((nouns)=>(
              <p key={nouns.id}>{nouns.noun} - {nouns.translation}</p>
            ))}
        </div>
        <div>
          <h3>Verbs</h3>
          {verbData.map((verbs)=>(
              <p key={verbs.id}>{verbs.verb} - {verbs.translation}</p>
            ))}
        </div>
        <div>
          <h3>Adjectives</h3>
          {adjectiveData.map((adjectives)=>(
              <p key={adjectives.id}>{adjectives.adjective} - {adjectives.translation}</p>
            ))}
        </div>
      </div>
    </div>
    
  )
}

export default Grammar
