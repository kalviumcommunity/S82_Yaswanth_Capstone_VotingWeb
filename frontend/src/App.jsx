import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import HomePage from './routes/HomePage'
import Login from './routes/Login'
import Signup from './routes/Signup'
import CreatePoll from './routes/CreatePoll'
import CandidateForm from './routes/CandidateForm'
import Profile from './routes/Profile'


function App() {
  
  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/createpoll' element={<CreatePoll/>}></Route>
        <Route path='/candidateform' element={<CandidateForm/>}></Route>
    
       </Routes>  
     </BrowserRouter>
    </>
  )
}

export default App
