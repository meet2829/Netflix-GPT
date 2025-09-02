import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Browse from './Components/Browse'


const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='browse' element={<Browse />}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes
