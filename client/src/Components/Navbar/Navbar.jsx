import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
 
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href='/' >MOVIE_HUB</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-2  text-white text-base">
          <li><Link to={"/login"} >Login</Link></li>
          <li><Link to={'/register'}>Register</Link></li>
        </ul>
        <div class="avatar placeholder">
          <div class="bg-slate-500  text-white rounded-full w-12">
            <span>S</span>
          </div></div>
      </div>
    </div>

    // <div className='navbar' >
    //     <img className='netflixlogo' src="https://i.pinimg.com/564x/40/29/e8/4029e81f1da34e646b778f8dae172d65.jpg" alt="" /><h2 style={{color:"white"}}>MOVIE HUB</h2>

    // </div>
  )
}

export default Navbar