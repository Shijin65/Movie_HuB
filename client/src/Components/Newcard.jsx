import React from 'react'
import { ImgUrl } from '../constants/constance'

function Newcard(props) {

    
  return (
    
    <div className="card card-side bg-base-100 shadow-xl mt-5 ">
                <figure><img className="h-44" src={`${ImgUrl+props.movie.poster_path}`} alt="Movie" /></figure>
                <div className="card-body">
                  <h2 className="card-title">New movie is released!</h2>
                  <p>{props.movie.title}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View</button>
                  </div>
                </div>
              </div>
  )
}

export default Newcard