import React from 'react'

import SearchBox from './SearchBox'

const Header = ({searchValue,setSearchValue,display,setMovies,setTotalCount}) => {
  function clear(){
    setMovies([]);
    setTotalCount(0);
    
  }
  return (
    <nav className='navbar navbar-dark bg-dark justify-content-between text-align-center'>
     <button className='navbar-brand' onClick={clear}>Movies</button>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
     <a className='navbar-brand'>{display}</a>

    </nav>
  )
}

export default Header