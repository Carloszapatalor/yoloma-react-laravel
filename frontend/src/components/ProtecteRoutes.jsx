import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import storage from '../Storage/storage'

export const ProtecteRoutes = ({children}) => {
    const authUser = storage.get ('authUser');
    if(!authUser){

        return <Navigate to={'/login'}/>
    }
    return <Outlet/>
}

export default ProtecteRoutes