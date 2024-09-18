// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import { AppBar, Typography, Stack, Button} from '@mui/material';
import Home from './components/Home';
// import Vocabulary from './components/Vocabulary';
// import Idioms from './components/Idioms';

function App() {


  return (
    
      <div>
       {/* <Router> 
        <AppBar position='static'>
        <Typography
            variant="h6"
            component="div"
            href="#app-bar-with-responsive-menu"
            sx={{flexGrow:1}}
          >
            ESTUDIA SPANISH
          </Typography>
          <Stack direction='row' spacing={2}>
            <Button color='inherit'>Home</Button>
            <Button color='inherit'><Link to='/vocabulary' style={{textDecoration: 'none', color: 'white'}}>Vocabulary</Link></Button>
            <Button color='inherit'><Link to={'/idioms'} style={{textDecoration: 'none', color: 'white'}}>Idioms</Link></Button>
          </Stack>  
        </AppBar>  */}

        <Home />
        

        
          {/* <Routes>
            <Route path="/vocabulary" element={<Vocabulary />} />
            <Route path="/idioms" element={<Idioms />} />   */}
          {/* </Routes> */}
        {/* </Router>     */}
        
      </div>
    
    
  );
}

export default App;
