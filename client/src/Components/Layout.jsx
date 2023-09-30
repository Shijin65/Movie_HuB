import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'


function Layout({children}) {
    return (
      <div className='d-flex flex-column h-screen '>
     <Navbar/>
         <div className="container">{children}</div> 
      <Footer/>
      </div>
    )
  }

export default Layout