import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import { AuthContext } from './AuthContext'
import Logout from './Logout'

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
    <nav className='mainnav'>
        <Link to='/*' className='nav-com'>Home</Link>
        {isLoggedIn && <Link to='/createpost' className='nav-com'>Create Post</Link>}
        {!isLoggedIn ? <Link to='/login' className='nav-com'>LogIn</Link>: <Logout/>}
    </nav>
    </>
  )
}

export default Navbar