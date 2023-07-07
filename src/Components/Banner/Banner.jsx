import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner'>
        <div className='logo-episod'>
            <h2 className='eps'><span className='N'>N</span> episode</h2>
        </div>
        <div className='moviename'>
            <h1>MOVIE NAME</h1>
        </div>
        <div className='buttons'>
            <button className='button'>Play</button>
            <button className='button'>Mylist</button>
        </div>
        <div className='description'>
            <span><h2>Titlehead</h2></span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className='fade_bottom'></div>


    </div>
  )
}

export default Banner