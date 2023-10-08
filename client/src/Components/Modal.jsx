import React, { useEffect, useState } from "react";
import { ImgUrl } from "../constants/constance";
import { API_KEY } from "../constants/constance";
import axios from "../constants/Axios";
import Youtube from "./Youtube";
function Modal(props) {
  const [movieD, setMovieD] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/movie/${props.id}?api_key=${API_KEY}`);
      setMovieD(response.data);
    };
    fetchData();

    document.getElementById("movie_modal").showModal();
  }, [props.id]);




  return (
    <div className="text-white">
      {/* show more details*/}
      <dialog id="movie_modal" className="modal">
        <div className="modal-box w-11/12 max-w-7xl">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                props.setmoviests(false);
                setMovieD("");
              }}
            >
              ✕
            </button>
          </form>
          <h1 className="font-serif text-white text-center text-xl md:text-6xl uppercase my-5">{movieD.title}</h1>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="img_container basis-1/2 ">
              <img src={`${ImgUrl + movieD.backdrop_path}`} alt="obj poster" />

              <div className="stats shadow ">
                <div className="flex flex-col sm:flex-row ">
                  <div className="stat basis-1/2" >
                    <div className="stat-figure text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">popularity</div>
                    <div className="stat-value text-primary">{movieD.popularity}</div>
                    <div className="stat-desc">Accoding to TMDB </div>
                  </div>

                  <div className="stat basis-1/2">
                    <div className="stat-figure text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Vote Avarage</div>
                    <div className="stat-value text-secondary">{movieD.vote_average}</div>
                    <div className="stat-desc">form <span className="text-white">{movieD.vote_count}</span> count</div>
                  </div>


                </div>
              </div>
            </div>

            <div className=" flex-col basis-1/2 justify-center">

              <div className="flex-col basis-2/3">
                <p>Original_title : {movieD.original_title}</p>
                <p>Release_date : {movieD.release_date}</p>
                <p>Language: {movieD.spoken_languages ? movieD.spoken_languages[0].name : ""}</p>
                <p>Tagline : {movieD.tagline}</p>
                <p>production_countries : {movieD.production_countries ? movieD.production_countries[0].name : ""}</p>

                {/* {console.log(movieD.production_countries[0].name)} */}

                {/* Budget and revenue */}

                <div className=" flex justify-between p-5 rounded-lg bg-primary text-primary-content mb-4 ">

                  <div className="   text-xl">
                    <div className=" ">Budget</div>
                    <div className=" ">${movieD.budget}</div>
                  </div>

                  <div className="text-xl">
                    <div className="">revenue</div>
                    <div className="">{movieD.revenue===0?<p>revenue is not available</p>: <p>${movieD.revenue}</p> }</div>
                  </div>

                </div>

                {/* Budget and revenue */}
                <div>
                  <h2 className="font-mono text-white text-center text-xl underline mt-5">Over View</h2>
                  <p>{movieD.overview}</p>
                </div>

              </div>
              <div className=" grid basis-1/3 justify-items-center ">

                {movieD.production_companies ?
                  <div>
                    <h2 className="font-mono text-white text-center text-xl underline mt-5">Production Companies</h2>
                    <img className="h-20 md:h-16 mt-3 shadow-sm shadow-white bg-white" src={`${ImgUrl + movieD.production_companies[0].logo_path}`} alt="obj poster" />
                  </div>
                  : ""}
              </div>
                  
            </div>
                  

          </div>
             

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button
                className="btn"
                onClick={() => {
                  props.setmoviests(false);
                  setMovieD("");
                }}
              >
                Close
              </button>
            </form>
          </div>
        <Youtube id={props.id}/> 
        </div>

      </dialog>
    </div>
  );
}

export default Modal;
