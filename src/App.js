import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Inicio from './components/inicio/Inicio';
import AboutMe from './components/AboutMe/AboutMe.js'
import Services from './components/Services/Services';
import Habilities from './components/Habilities/Habilities';
import Portafolio from './components/Portafolio/Portafolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
  
    <Routes>
    <Route path="/" element={<Inicio/>}/>
    <Route path='/aboutme' element={<AboutMe/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/habilities' element={<Habilities/>}/>
    <Route path='/portafolio' element={<Portafolio/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
  
    </BrowserRouter>
  );
}

export default App;
