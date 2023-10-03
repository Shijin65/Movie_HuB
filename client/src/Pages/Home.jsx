import React, { useContext } from 'react'
import AuthContext from '../Context/Authcontext'
import Banner from '../Components/Banner/Banner'

function Home() {
    const{user}=useContext(AuthContext)
    
  return (
    <>
   <Banner/>
    </>
  )
}

export default Home