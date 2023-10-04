import React, { useContext, useEffect, useState } from "react";
import axios from "../../constants/Axios";
import { ImgUrl } from "../../constants/constance";
// import './Cards.css'
import YouTubeList from "../youtube/YouTubeList";

import ToastContext from "../../Context/Toastcontext";

function Cards(props) {
  const{toast}=useContext(ToastContext)
  const [Movie, setMovie] = useState([]);
  const [movieD, setMovieD] = useState([]);
  const [moviests, setmoviests] = useState(false);

  useEffect(() => {
   try {
    axios.get(props.Url).then((response) => {
      setMovie(response.data.results);
    });
   } catch (error) {
    
    toast.error("some issues")
   }
   
  }, [props]);

  const Handlemovie = (selectedmovieD) => {
    setmoviests(!moviests);
    setMovieD(selectedmovieD);
    // console.log(movieD)
  };

  if (moviests) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    // row of posters
    <div className="row mt-5">
      <h2 className="text-center text-white font-bold">{props.title}</h2>
      <div className="poster_cards flex overflow-x-scroll overflow-y-hidden gap-5 mt-3">
        {props.isSmall
          ? "" : Movie.map(
            (movie) => (
              <span>
                <div
                  className="card card-compact h-36 w-52 sm:h-30 md:h-48 sm:w-56 md:w-96 shadow-xl bg-cover overflow: -webkit-scrollbar:none  " 
                  style={{
                    backgroundImage: `url(${movie ? ImgUrl + movie.backdrop_path : ""
                      })`,
                  }}
                >
                  {/* <figure><img src="" alt="Shoes" /></figure> */}
                  <div className="card-body items-start mt-11">
                    <h2 className="card-title text-white">{movie.name}</h2>

                    <div className="card-actions justify-center ">
                      <button
                        className="btn glass text-white btn-xs md:btn-md"
                        onClick={() =>
                          document.getElementById("movie_modal").showModal()
                        }
                      >
                        details
                      </button>
                    </div>
                  </div>
                </div>
              </span>
            )
            //     <div className='poster' >
            //   <p id='name'>{obj.name}</p>
            //   <img onClick={()=>Handlemovie(obj)}  className={props.isSmall ? "small_card" : "main_card"} src={props.isSmall ?`${ImgUrl+obj.poster_path}`:`${ImgUrl+obj.backdrop_path}`} alt="moive" />
            //   <button onClick={()=>Handlemovie(obj)}>Show  Details</button>
            // </div>
          )
          }
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
                  <img src={`${ImgUrl + movieD.backdrop_path}`} alt="movie poster" />
                </div>


                {/* text container start */}
                <div className='text_container'>
                  <h4>Movie Name : <span style={{ textTransform: 'uppercase' }}>{movieD.name}{movieD.title}</span></h4>
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
