import React, { useEffect, useState} from 'react'
import { db } from '../firebase/firebase.utils'
import { getDocs, collection } from 'firebase/firestore'

const fetchFromFirestore = async () =>{
  const querySnapshot = await getDocs(collection(db, "vocabulary"))
  const data = []
  querySnapshot.forEach((doc)=>{
    data.push({ id:doc.id, ...doc.data()})
  });
  return data;
}

const Vocabulary = () => {
  const [vocabData, setVocabData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromFirestore();
      setVocabData(data)
    }
    fetchData();
  },[])

  return (
    <div>
      <h1>Vocabulary</h1>
      <div>
      {vocabData.map((vocabulary)=>(
        <div key={vocabulary.id}className='mb-4'>
          <p>{vocabulary.word}</p>
        </div>
      ))}
      </div>

    </div>
  )
}

export default Vocabulary
