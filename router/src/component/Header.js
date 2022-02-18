import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <> 
    <h1>React router tutorial</h1>
    <ul className='nav'>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>about</Link>
        </li>
        <li>
            <Link to='/profile'>Profile</Link>
        </li>
    </ul>
    </>
        
    
  )
}

export default Header