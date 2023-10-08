import React, { useContext, useState } from 'react'
import { API_KEY } from '../constants/constance';
import axios from "../constants/Axios";
import ToastContext from '../Context/Toastcontext';
import YouTube from 'react-youtube';


function Youtube(props) {
    const{toast}=useContext(ToastContext)
    
    const [list,setlist] = useState([])
    const showvideos =()=>{
        
        console.log(props.id)
        axios.get(`/movie/${props.id}/videos?api_key=${API_KEY}`).then((response) => {
            if (response.data.results.length !== 0) {
                document.getElementById('Yvideos').showModal();
              const results =(response.data.results)
              results.map((data)=>{
                setlist(data.key)
                
              })
            }else{
                toast.error("no related video for this movie")
            }
          });
    }
        
    const opts = {
   
        height: '250',
        
        playerVars: {
          autoplay: 0,
          
        },
      };
    
    return (
    <div>
           <div className="text-center my-5">
                    <button className="btn outline glass"onClick={()=>showvideos()}>Related videos</button>
                  </div>
<dialog id="Yvideos" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    
    {/* {list.map((obj)=>{
        console.log(obj)
    })} */}
      
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

    </div>
  )
}

export default Youtube