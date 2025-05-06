import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import HomePage from './routes/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<HomePage/>}></Route>
       </Routes>  
     </BrowserRouter>
    </>
  )
}

export default App
