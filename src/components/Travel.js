import React, {useState, useEffect} from 'react'
import { db } from '../firebase/firebase.utils'
import { getDocs, collection } from 'firebase/firestore'
import { Box, Button, CardContent, Typography } from '@mui/material'
import '../App.css';

const fetchFromFirestore = async () =>{
  const querySnapshot = await getDocs(collection(db, "travel"))
  const data = []
  querySnapshot.forEach((doc)=>{
    data.push({ id:doc.id, ...doc.data()})
  });
  return data;
}
const fetchDirectionsFromFirestore = async () =>{
  const querySnapshot = await getDocs(collection(db, "directions"))
  const data = []
  querySnapshot.forEach((doc)=>{
    data.push({ id:doc.id, ...doc.data()})
  });
  return data;
}

const fetchRestaurantPhrasesFromFirestore = async () =>{
  const querySnapshot = await getDocs(collection(db, "restaurant"))
  const data = []
  querySnapshot.forEach((doc)=>{
    data.push({ id:doc.id, ...doc.data()})
  });
  return data;
}
const Travel = () => {
  const [travelData, setTravelData] = useState([]);
  const [directionsData, setDirectionsData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchFromFirestore();
        setTravelData(data)
      }
      fetchData();
    },[])

    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchDirectionsFromFirestore();
        setDirectionsData(data)
      }
      fetchData();
    },[])

    useEffect(()=> {
      const fetchData = async () => {
        const data = await fetchRestaurantPhrasesFromFirestore();
        setRestaurantData(data)
      }
      fetchData();
    })

const [showSurvivalPhrases, setShowSurvivalPhrases] = useState(true)
const [showDirections, setShowDirections] = useState(true)
const [showRestaurantPhrases, setShowRestaurantPhrases] = useState(true)

const toggleSurvivalPhrases = () =>{
  setShowSurvivalPhrases(!showSurvivalPhrases)
}
const toggleDirections = () =>{
  setShowDirections(!showDirections)
}

const toggleRestaurantPhrases = () =>{
  setShowRestaurantPhrases(!showRestaurantPhrases)
}
  return (
    <div className='box'>
      <h1>Travel</h1>

      <Button onClick={toggleSurvivalPhrases} 
      variant='contained'
      sx={{ width:200, fontSize: '.8rem'}}
      ><h3> Survival phrases</h3></Button>
      <div>
        
        {showSurvivalPhrases && (
          <div>
            {travelData.map((travel) => (
              <Box key={travel.id}>
                <CardContent className='mb-4'>
                  <Typography variant='h6'>
                    <strong>{travel.word}</strong> - {travel.translation}
                  </Typography>
                </CardContent>
              </Box>
            ))}
          </div>
        )}
      </div>
      <br />
      <div>
        <Button onClick={toggleDirections} 
        variant='contained'
        sx={{ width:200, fontSize:'.8rem' }}
        ><h3> Directions</h3></Button>
        {showDirections && (
          <div>
            {directionsData.map((directions) => (
              <Box key={directions.id}>
                <CardContent className='mb-4'>
                  <Typography variant='h6'>
                    <strong>{directions.direction}</strong> - {directions.translation}
                  </Typography>
                </CardContent>
              </Box>
            ))}
          </div>
        )}

      </div>
      <br />
      <div>
        <Button onClick={toggleRestaurantPhrases} 
        variant='contained'
        sx={{ width:200, fontSize:'.8rem' }}
        ><h3>Restaurant</h3></Button>
        {showRestaurantPhrases && (
          <div>
            {restaurantData.map((restaurant) => (
              <Box key={restaurant.id}>
                <CardContent className='mb-4'>
                  <Typography variant='h6'>
                    <strong>{restaurant.phrase}</strong> - {restaurant.translation}
                  </Typography>
                </CardContent>
              </Box>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default Travel
