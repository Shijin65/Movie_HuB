import React , {useEffect,useState} from 'react'
import axios from "../../constants/Axios";
import {ImgUrl } from "../../constants/constance";
// import './Cards.css'
import YouTubeList from '../youtube/YouTubeList';






function Cards(props) {
  const [Movie, setMovie] = useState([])
  const [movieD,setMovieD]=useState([])
  const [moviests,setmoviests]=useState(false)
  

useEffect(()=>{axios.get(props.Url).then((response)=>{
   setMovie(response.data.results)
  })
},[props])
  

const Handlemovie=(selectedmovieD)=>{
  setmoviests(!moviests)
  setMovieD(selectedmovieD)
  // console.log(movieD)
}

if(moviests) {
  document.body.classList.add('active-modal')
} else {
  document.body.classList.remove('active-modal')
}


  return (

    // row of posters
    <div className='row'>
          <h2>{props.title}</h2>
        <div className='poster_cards'>


        {Movie.map((obj)=>
            <div className='poster' >
              
          <p id='name'>{obj.name}</p>
          <img onClick={()=>Handlemovie(obj)}  className={props.isSmall ? "small_card" : "main_card"} src={props.isSmall ?`${ImgUrl+obj.poster_path}`:`${ImgUrl+obj.backdrop_path}`} alt="moive" />
    

    
          <button onClick={()=>Handlemovie(obj)}>Show  Details</button>
        </div>
        )}
        </div>
{/* row of posters end */}


{/* show more details*/}

{moviests && <div className='overlay' >
  
        <div className='details'>
          <button className='titleCloseBtn' onClick={()=>setmoviests(false)}>X</button>
        <h1>{movieD.name}</h1>
      <h1>{movieD.title}</h1>
      <div className='more_details' style={{ display: 'flex'}}>


      <div className='img_container'>
      <img src={`${ImgUrl+movieD.backdrop_path}`} alt="movie poster" />
      </div>


{/* text container start */}
      <div className='text_container'>
          <h4>Movie Name : <span style={{textTransform:'uppercase'}}>{movieD.name}{movieD.title}</span></h4>
          <p>Release Date : {movieD.first_air_date} {movieD.release_date}</p>
          {movieD.origin_country ?  <p>Country : {movieD.origin_country}</p>:""}
          <p>Language : {movieD.original_language} </p><br />


{/* rating star  */}
          <h4>Rating : {movieD.vote_average}<span style={{color:'grey'}}>({movieD.vote_count})</span></h4>
        <div className="star-ratings">
        <div className="fill-ratings" style={{width:`${movieD.vote_average*10}%` }} >
        <span>★★★★★</span>
        </div>
        <div className="empty-ratings">
        <span>★★★★★</span>
        </div>
        </div><br/><br/>
        <h4>Over View</h4>
        <p style={{fontSize:10}}>{movieD.overview}</p><br />

{/* rating star end  */}
</div>
{/* text container end */}
    
</div>


{/* youtube play list starts */}




  <YouTubeList id={movieD.id}/>
  </div>
  
        </div>}
{/* youtube play list end here */}        
{/* show more details*/}
        
        
    </div>
  )
}

export default Cards