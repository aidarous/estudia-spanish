import React, {useState, useEffect} from 'react'
import { db } from '../firebase/firebase.utils'
import { getDocs, collection } from 'firebase/firestore'
import { Box, CardContent, Typography } from '@mui/material'

const fetchFromFirestore = async () =>{
  const querySnapshot = await getDocs(collection(db, "travel"))
  const data = []
  querySnapshot.forEach((doc)=>{
    data.push({ id:doc.id, ...doc.data()})
  });
  return data;
}
const Travel = () => {
  const [travelData, setTravelData] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchFromFirestore();
        setTravelData(data)
      }
      fetchData();
    },[])

  return (
    <div>
      <h1>Travel</h1>

      <h3> Survival phrases</h3>
      <div>
      {travelData.map((travel)=>(
        <Box>

        
          <CardContent key={travel.id}className='mb-4'>
            <Typography variant='h6'><strong>{travel.word}</strong> - {travel.translation}</Typography>
          </CardContent>
        </Box> 
      ))}
      </div>

    </div>
  )
}

export default Travel
