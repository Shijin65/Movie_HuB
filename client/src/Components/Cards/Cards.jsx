import React, { useContext, useEffect, useState } from "react";
import axios from "../../constants/Axios";
import { ImgUrl } from "../../constants/constance";
// import './Cards.css'
// import YouTubeList from "../youtube/YouTubeList";
import {API_KEY} from '../../constants/constance'
import ToastContext from "../../Context/Toastcontext";

function Cards(props) {
  const{toast}=useContext(ToastContext)
  const [Movies, setMovies] = useState([]);
  const [movieD, setMovieD] = useState([]);
  const [moviests, setmoviests] = useState(false);

  useEffect(() => {
   try {

    axios.get(props.Url).then((response) => {
      setMovies(response.data.results);
      // console.log(response.data.results)
    });
   } catch (error) {
    
    toast.error("some issues")
   }
   
  }, [props]);

  const HandleMovie=(movieid)=>{
    axios.get(`/movie/${movieid}?api_key=${API_KEY}`).then((response) => {
      setMovieD(response.data.results);
    });

    console.log(movieD)
    document.getElementById("movie_modal").showModal()
  };

  // if (moviests) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }

  return (
    // row of posters
    <div className="row mt-5">
      <h2 className="text-center text-white font-bold">{props.title}</h2>
      <div className="poster_cards flex overflow-x-scroll overflow-y-hidden  mt-3 no-scrollbar">
        {Movies.map(
            (obj) => (
              <span key={obj.id}>
                
                <div id={obj.id} 
                  className={`card card-compact ms-5 shadow-xl bg-cover${props.isSmall?" flex-col grid content-end justify-items-center  h-48 w-32 sm:h-36  sm:w-56 md:w-48  md:h-72 bg-cover ":" flex-col h-40 w-72 sm:h-30 md:h-48 sm:w-56 md:w-96  bg-cover"}`}    
                  style={{
                    backgroundImage: `url(${props.isSmall ? ImgUrl +obj.poster_path
                      : ImgUrl + obj.backdrop_path
                      })`,
                  }}
                >
                  <div className="card-body items-start ">
                    <h2 className="card-title text-white">{obj.name}</h2>

                    <div className="card-actions  ">
                      <button
                        className="btn glass  text-white btn-sm md:btn-md"
                        onClick={() =>HandleMovie(obj.id)}>
                        details
                      </button>
                    </div>
                  </div>
                </div>
              </span>
            ))}
      </div>
      {/* row of posters end */}

      {/* show more details*/}
      <dialog id="movie_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">{movieD}</h3>
          <div className='overlay' >

            <div className='details'>
              <button className='titleCloseBtn' onClick={() => setmoviests(false)}>X</button>
              <h1>{movieD.name}</h1>
              <h1>{movieD.title}</h1>
              <div className='more_details' style={{ display: 'flex' }}>


                <div className='img_container'>
                  <img src={`${ImgUrl + movieD.backdrop_path}`} alt="obj poster" />
                </div>


                {/* text container start */}
                <div className='text_container'>
                  <h4>Movies Name : <span style={{ textTransform: 'uppercase' }}>{movieD.name}{movieD.title}</span></h4>
                  <p>Release Date : {movieD.first_air_date} {movieD.release_date}</p>
                  {movieD.origin_country ? <p>Country : {movieD.origin_country}</p> : ""}
                  <p>Language : {movieD.original_language} </p><br />


                  {/* rating star  */}
                  <h4>Rating : {movieD.vote_average}<span style={{ color: 'grey' }}>({movieD.vote_count})</span></h4>
                  <div className="star-ratings">
                    <div className="fill-ratings" style={{ width: `${movieD.vote_average * 10}%` }} >
                      <span>★★★★★</span>
                    </div>
                    <div className="empty-ratings">
                      <span>★★★★★</span>
                    </div>
                  </div><br /><br />
                  <h4>Over View</h4>
                  <p style={{ fontSize: 10 }}>{movieD.overview}</p><br /></div></div></div></div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* rating star end  */}
    </div>
  );
}

export default Cards;
