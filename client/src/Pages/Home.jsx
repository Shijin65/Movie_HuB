import React, { useContext } from 'react'
import AuthContext from '../Context/Authcontext'

function Home() {
    const{user}=useContext(AuthContext)
    console.log(user)
  return (
    <div>Home</div>
  )
}

export default Home