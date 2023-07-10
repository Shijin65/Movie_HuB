import React , {useEffect,useState} from 'react'
import axios from "../../constants/Axios";
import {ImgUrl } from "../../constants/constance";
import './Cards.css'

function Cards(props) {
  const [Movie, setMovie] = useState([])

useEffect(()=>{axios.get(props.Url).then((response)=>{
   setMovie(response.data.results)
   
  })
},[props])
  

  return (
    <div className='row'>
          <h2>{props.title}</h2>
        <div className='poster_cards'>
        {Movie.map((obj)=>
            <div>
          <img className={props.isSmall ? "small_card" : "card_image "} src={`${ImgUrl+obj.backdrop_path}`} alt="" />
          <p>{obj.original_title}</p>
          </div>
        )}


        </div>
        


    </div>
  )
}

export default Cards