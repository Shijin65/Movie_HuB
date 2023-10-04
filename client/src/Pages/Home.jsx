import React, { useContext } from 'react'
import AuthContext from '../Context/Authcontext'
import Banner from '../Components/Banner/Banner'
import Cards from '../Components/Cards/Cards'
import {originals,action,Horror} from "../url"

function Home() {
    const{user}=useContext(AuthContext)
    
  return (
    <>
   <Banner/>
   <Cards Url={originals}  title="NEW RELEASE💫"/>
   <Cards Url={action}  title="NEW RELEASE💫" isSmall/>
   <Cards Url={Horror}  title="NEW RELEASE💫"/>
    </>
  )
}

export default Home