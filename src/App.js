import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Inicio from './components/inicio/Inicio';
import AboutMe from './components/AboutMe/AboutMe.js'

function App() {
  return (
    <BrowserRouter>
  
    <Routes>
    <Route path="/" element={<Inicio/>}/>
    <Route path='/aboutme' element={<AboutMe/>}/>
    </Routes>
  
    </BrowserRouter>
  );
}

export default App;
