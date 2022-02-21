import React from 'react'
import SearchBox from './SearchBox'

const Header = () => {
  return (
    <nav className='navbar navbar-dark bg-dark justify-content-between'>
        <a className='navbar-brand'>Movies</a>
        <SearchBox/>
    </nav>
  )
}

export default Header