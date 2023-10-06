import React, { useEffect, useState } from 'react'
import { ImgUrl } from '../constants/constance'
import {API_KEY} from '../constants/constance'
import axios from "../constants/Axios";
function Modal(props) {
const [movieD,setMovieD]=useState([])
    useEffect(()=>{
        const fetchData =(async()=>{
                const response = await axios.get(`/movie/${props.id}?api_key=${API_KEY}`);
              setMovieD(response.data);
        })
        fetchData()
        document.getElementById("movie_modal").showModal()
    },[props])
    console.log(movieD)
    

  return (
    
    <div>      {/* show more details*/}
    <dialog id="movie_modal" className="modal">
      <div className="modal-box w-11/12 max-w-7xl">
        {/* <h3 className="font-bold text-lg"></h3> */}
        <div className='overlay' >

          <div className='details'>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>{props.setmoviests(false)
            setMovieD("")
            }}>
                    ✕
                  </button>
          </form>
          
            {/* <h1>{movieD.name}</h1> */}
            <h1>{movieD.title}</h1>
            <div className='more_details' style={{ display: 'flex' }}>


              <div className='img_container'>
                <img src={`${ImgUrl + movieD.backdrop_path}`} alt="obj poster" />
              </div>
              </div></div></div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn"  onClick={()=>{props.setmoviests(false)
            setMovieD("")
            }}>Close</button>
          </form>
        </div>
      </div>
    </dialog></div>
  )
}

export default Modal