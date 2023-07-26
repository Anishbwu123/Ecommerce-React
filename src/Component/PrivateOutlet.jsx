import React from 'react'
import useAuth from '../Hook/UseAuth'
import {Outlet,Navigate} from 'react-router-dom'

const PrivateOutlet = () => {
    const auth=useAuth()
  return auth?<Outlet/>:<Navigate to="/page1"/>
}

export default PrivateOutlet
