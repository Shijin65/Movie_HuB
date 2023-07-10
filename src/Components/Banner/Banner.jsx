import React,{useEffect,useState} from 'react'
import './Banner.css'
import axios from '../../constants/Axios'
import { API_KEY, ImgUrl } from "../../constants/constance";


function Banner() {
    const [Movie,setMovie]=useState()


useEffect(()=>{
    axios.get(`/trending/movie/week?api_key=${API_KEY}`).then((response)=>{

        console.log(response.data.results[0])
         setMovie(response.data.results[1])
   
        })
},[])

  return (
    <div style={{backgroundImage:`url(${Movie ? ImgUrl+Movie.backdrop_path :"" })`}}
    className='banner'>
        <div className='logo-episod'>
            <h2 className='eps'><span className='N'>N</span>{Movie ? Movie.media_type : ""}</h2>
        </div>
        <div className='moviename'>
          <h1>{Movie ? Movie.title :""}</h1>
        </div>
        <div className='buttons'>
            <button className='button'>Play</button>
            <button className='button'>Mylist</button>
        </div>
        <div className='description'>
            <span><h2>{Movie ? Movie.original_title :''}</h2></span>
            <p>{Movie ? Movie.overview :''}</p>
        </div>
        <div className='fade_bottom'></div>


    </div>
  )
}

export default Banner