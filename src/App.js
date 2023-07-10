import React from 'react'
import './App.css'
import {originals,action,Horror} from './url'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Cards from './Components/Cards/Cards'


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Cards Url={originals}  title="Shitflix"  />
      <Cards Url={action}  title="Action" isSmall />
      <Cards Url={Horror}  title="Horror" isSmall />
      
    </div>
  )
}

export default App