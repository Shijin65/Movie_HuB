import React, { useContext, useEffect, useState } from "react";
import axios from "../../constants/Axios";
import { ImgUrl } from "../../constants/constance";
// import './Cards.css'
// import YouTubeList from "../youtube/YouTubeList";
import ToastContext from "../../Context/Toastcontext";
import Modal from "../Modal";
import PuffLoader from "react-spinners/PuffLoader";

function Cards(props) {
  const{toast}=useContext(ToastContext)
  const [Movies, setMovies] = useState([]);
  const [movieD, setMovieD] = useState([]);
  const [movieid, setMovieid] = useState([]);
  const [moviests, setmoviests] = useState(false);
  const [ loading,setloading ] = useState(false);

  useEffect(() => {
   try {
      
    axios.get(props.Url).then((response) => {
setloading(true)
       
      setMovies(response.data.results);
      setloading(false)

     
    });
    
   } catch (error) {
    
    toast.error("some issues")
   }
   
  }, [props]);
console.log(Movies)
  const HandleMovie=(movieid)=>{
    setmoviests(!moviests)
    setMovieid(movieid)
    // console.log(movieid)
    
  };

  return (
    // row of posters
    <div className="row mt-5">

      
      {!loading?<>
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
      </>   :<PuffLoader color="#36d7b7" />}
      
      
      {/* row of posters end */}

      {moviests?<Modal id={movieid}  setmoviests={setmoviests} />:""}

      {/* rating star end  */}
    </div>
  );
}

export default Cards;
