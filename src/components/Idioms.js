import React, {useState, useEffect} from 'react'
import { db } from '../firebase/firebase.utils'
import { getDocs, collection } from 'firebase/firestore'
import { Box, CardContent, Typography } from '@mui/material'

const fetchFromFirestore = async () =>{
  const querySnapshot = await getDocs(collection(db, "idioms"))
  const data = []
  querySnapshot.forEach((doc)=>{
    data.push({ id:doc.id, ...doc.data()})
  });
  return data;
}

const Idioms = () => {
  const [idiomData, setIdiomData] = useState([]);
    
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromFirestore();
      setIdiomData(data)
    }
    fetchData();
  },[])

  return (
    <div>
      <h1>Idioms</h1>
      <div>
      {idiomData.map((idiom)=>(
        <Box>

        
          <CardContent key={idiom.id}className='mb-4'>
            <Typography variant='h6'><strong>{idiom.phrase}</strong> - {idiom.translation}</Typography>
          </CardContent>
        </Box> 
      ))}
      </div>
    </div>
  )
}

export default Idioms
