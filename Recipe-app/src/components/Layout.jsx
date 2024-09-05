import React from 'react';
import Categories from './categories';
import NavBar from './Nav';
import Search from './Search';

function Layout( {children}) {
  return (
    <div>
        <NavBar/>
        <Search/>
        <Categories/>
        {children}
    </div>
  )
}

export default Layout