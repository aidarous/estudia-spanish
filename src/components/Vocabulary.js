import React, { useEffect, useState} from 'react'
import { db } from '../firebase/firebase.utils'
import { getDocs, collection } from 'firebase/firestore'
import { Box, CardContent, Typography } from '@mui/material'

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
    <div className='box'>
      <h1>Vocabulary</h1>
      <div>
      {vocabData.map((vocabulary)=>(
        <Box>

        
          <CardContent key={vocabulary.id}className='mb-4'>
            <Typography variant='h6'><strong>{vocabulary.word}</strong> - {vocabulary.translation}</Typography>
          </CardContent>
        </Box> 
      ))}
      </div>

    </div>
  )
}

export default Vocabulary;
