import React from 'react'
import { ImgUrl } from '../constants/constance'

function Modal(props) {
    const{movieD}=props
    if (props.Modal) {
        document.getElementById("movie_modal").showModal()
    }
    

  return (
    <div>      {/* show more details*/}
    <dialog id="movie_modal" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">{movieD}</h3>
        <div className='overlay' >

          <div className='details'>
            <button className='titleCloseBtn' >X</button>
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
    </dialog></div>
  )
}

export default Modal