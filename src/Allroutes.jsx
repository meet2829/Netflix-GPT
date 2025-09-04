import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Browse from './Components/Browse'
import ProtectedRoute from './utils/ProtectedRoute'
import Practies from './Components/Practies'


const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='browse' element={<ProtectedRoute><Browse /></ProtectedRoute>}></Route>
            <Route path='/practies' element={<Practies />}></Route>

        </Routes>
    </div>
  )
}

export default Allroutes
