import { useState, useEffect} from 'react'
import { Routes, Route} from "react-router-dom";
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Err404 from './pages/Err404';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)

    return () =>{
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <>

    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route path="/projects" element={<Projects />} /> 
      <Route path="/contact" element={<Contact />} /> 
      <Route path="*" element={<Err404 />} /> 
    </Routes>
    
    </>

  )
}

export default App

