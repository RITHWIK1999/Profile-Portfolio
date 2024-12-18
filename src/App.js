import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nanbar from './Components/Nanbar';
function App() {
  return (
 <>
 <BrowserRouter>
 <Nanbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='contact' element={<Contact/>}/>
 </Routes>
 </BrowserRouter>
 </>
  );
}

export default App;
