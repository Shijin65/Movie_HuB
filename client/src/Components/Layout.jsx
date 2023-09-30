import React from 'react'
import Navbar from './Navbar/Navbar'


function Layout({children}) {
    return (
      <div className='d-flex flex-column'>
     <Navbar/>
         <div className="container">{children}</div> 
      </div>
    )
  }

export default Layout