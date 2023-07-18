import React,{useEffect, useState} from 'react'
import axios from "./constants/Axios"
import {API_KEY} from './constants/constance'
import './YouTubeList.css'
import YouTube from "react-youtube";



function YouTubeList(props) {

const [List, setList] = useState([])
  useEffect(()=>{axios.get(`/movie/${props.id}/videos?api_key=${API_KEY}`).then((Response)=>{
    // console.log(Response.data.results.length)
if (Response.data.results.length!==0) {
      setList(Response.data.results)

}
  }).catch(err=>{alert('error')})

  })


  const opts = {
   
    height: '250',
    
    playerVars: {
      autoplay: 0,
      
    },
  };
  return (
    <div className='details_row'>
          <h2 style={{color:'black' ,textAlign:'left'}}>Releated Videos</h2>
        <div className='details_poster'>
      {List.map((obj)=>
      <YouTube opts={opts} videoId={obj.key}/>
      
)}

        </div>


    </div>
  )
}

export default YouTubeList