import React ,{useState}from 'react'
import './Navbar.css'



function Navbar() {
  const[state,setstate]=useState(false)
  // console.log(state)
  const handlecolour=()=>{
    // console.log('clicked')
    setstate(!state)
  }
  return (
 
    <div className='navbar' style={{backgroundColor:`${state ? "white" :"black"}`}}>
         
        <img className='netflixlogo' src="https://i.pinimg.com/564x/40/29/e8/4029e81f1da34e646b778f8dae172d65.jpg" alt="" /><h2 style={{color:`${state ? "black" :"white"}`}}>MOVIE HUB</h2>
        <img className='avatar' src={state ? "https://i.pinimg.com/564x/79/f5/42/79f5429fe103d16c8114a4c2ae647d64.jpg" :"https://i.pinimg.com/564x/c0/30/ab/c030abe6b95fc50c3426122781c9de05.jpg"} alt="" onClick={handlecolour}/>
   
    </div>
  )
}

export default Navbar