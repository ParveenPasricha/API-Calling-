import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Movement from './Pages/Movement'
import Qualification from './Pages/Qualification'
import Error from './Pages/Error'
function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path="/" element={<Home/>}>Contact</Route>
      <Route path="contact" element={<Contact/>}>Contact</Route>
      <Route path="movement" element={<Movement/>}>Movement</Route>
      <Route path="qualification" element={<Qualification/>}>Qualification</Route>
      <Route path="*" element={<Error/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App