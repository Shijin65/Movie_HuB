import React,{useState} from 'react'
import './App.css'
import {originals,action,Horror,Tv_Series} from './url'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Cards from './Components/Cards/Cards'



function App() {
const [state,setstate]=useState(false)
  
  return (
    <div style={{backgroundColor:"black"}}>
      
      <Navbar/>
      <Banner/>
      <Cards Url={originals}  title="Shitflix"  />
      <Cards Url={action}  title="Action" isSmall />
      <Cards Url={Horror}  title="Horror" isSmall />
      <div className='button_container' style={{textAlign:'center',marginBottom:'20px'}}
      >
        <button
       
        className='button' onClick={()=>{setstate(!state)}} >show more</button></div>
      
      {state && <Cards Url={Tv_Series}  title="Tv Series" />}

      
    </div>
  )
}

export default App