import React,{useEffect,useState} from 'react'
import './Banner.css'
import axios from '../../constants/Axios'
import { API_KEY, ImgUrl } from "../../constants/constance";
import  YouTube from 'react-youtube';


function Banner() {
    const [Movie,setMovie]=useState([])
    const [movieK_Id,setmovieK_Id]=useState()
    const [Y_List,setY_List]=useState([])



  



useEffect(()=>{
    axios.get(`/trending/movie/week?api_key=${API_KEY}`).then((response)=>{
     
       const element=Math.floor((Math.random(10)*10))
         setMovie(response.data.results[element]) 
      
      
        })
},[])



const HandleMovie=(id)=>{
axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
  if (response.data.results.length!==0) {
    
    setmovieK_Id(response.data.results[10])
    // console.log(movieK_Id)
    
  }
})
}



const HandleMovielist=(id)=>{
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{

    
    if (response.data.results.length!==0) {
      // console.log(response.data)
      setY_List(response.data.results)
      
      
    }
   
  }).catch(err=>{
    alert('some error occered')
  })
}


const opts = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};




  return (
    <div>
    <div style={{backgroundImage:`url(${Movie ? ImgUrl+Movie.backdrop_path :"" })`}}
    className='banner'>
        <div className='logo-episod'>
            <h2 className='eps'>{Movie ? Movie.media_type : ""}<span className='N'>_H</span></h2>
        </div>
        <div className='moviename'>
          <h1>{Movie ? Movie.title :""}</h1>
        </div>
        
        <div className='buttons'>
            <button className='button' onClick={()=>HandleMovie(Movie.id)}  >
              Play</button>
            <button className='button' onClick={()=>HandleMovielist(Movie.id)}>Play List</button>
            
        </div>
        <div className='description'>
            {/* <span><h2>{Movie ? Movie.original_title :''}</h2></span> */}
            <p>{Movie ? Movie.overview :''}</p>
        </div>
        <div className='fade_bottom'></div>
        </div>


        <div className='row'> 
        <div className='poster_cards'>
        {Y_List.map((movieData)=>
          <div className='row'>
           <YouTube  id='ylist' videoId={movieData.key}/>
          </div>

        )}</div>
  {movieK_Id    &&     <div><YouTube id='youtube' videoId={movieK_Id.key} opts={opts}    />
        </div>}</div>
    </div>
  )
}

export default Banner