import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { AppBar, Typography, Stack, Button} from '@mui/material';

import Vocabulary from './components/Vocabulary';
import Idioms from './components/Idioms';

function App() {


  return (
    
      <div>
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
            <Button color='inherit'>Vocabulary</Button>
            <Button color='inherit'>Idioms</Button>
          </Stack>  
        </AppBar> 

        <Link to={'/vocabulary'}>Vocabulary</Link>
        <Link to={'/idioms'}>Idioms</Link>

        <Router>
          <Routes>
            <Route path="/vocabulary" element={<Vocabulary />} />
            <Route path="/idioms" element={<Idioms />} />  
          </Routes>
        </Router>    
        
      </div>
    
    
  );
}

export default App;
