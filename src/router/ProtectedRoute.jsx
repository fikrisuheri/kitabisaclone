import React from 'react';
import { Redirect } from 'react-router-dom';

function ProtectedRoute({children}) {
    
    const isAuth = localStorage.getItem('token')
    
    return isAuth ? (
        children
    )
    :
    (
        <Redirect  to={{ pathname: '/login' }}  />
    )
}

export default ProtectedRoute;