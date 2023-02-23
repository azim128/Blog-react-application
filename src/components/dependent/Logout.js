import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Auth } from '../confic/FirebaseConfic'
import '../styles/navbar.css'
import { AuthContext } from './AuthContext'

const Logout = () => {
    const { setIsLoggedIn } = useContext(AuthContext);
    let navigate =useNavigate();

    const logoutfun=()=>{
        signOut(Auth);
        localStorage.clear();
        setIsLoggedIn(false);
        navigate('/login');
    }
  return (
    <Link className='nav-com' onClick={logoutfun}>Logout</Link>
  )
}

export default Logout