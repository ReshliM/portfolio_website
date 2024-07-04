import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route,Link} from "react-router-dom";
import { Sidenav } from './Sidenav'
import { Home } from './Home'
import {About} from './About'
import {Skill} from './Skill'
import { Resume } from './Resume'
import { Portfolio } from './Portfolio'
import { Service } from './Service'
import { Contact } from './Contact';

function App() {

  return (
    <>
     <Sidenav/>
    <Routes>

  <Route path="/" element={  <Home/>}  />        
  <Route path="about" element={ <About/>}  />    
  <Route path="skill" element={  <Skill/>}  />    
  <Route path="resume" element={<Resume />}  />    
  <Route path="portfolio" element={  <Portfolio/>}  />              
  <Route path="service" element={<Service/>}  />
  <Route path="contact" element={<Contact/>}  />
  



  

  </Routes>
    </>
  )
}

export default App
