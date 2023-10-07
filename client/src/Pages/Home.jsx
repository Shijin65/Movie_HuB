import React, { useContext, useEffect, useState } from "react";
// import AuthContext from '../Context/Authcontext'
import Banner from "../Components/Banner/Banner";
import Cards from "../Components/Cards/Cards";
import { originals, action, Horror } from "../url";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/Authcontext";

function Home() {
  const [more, setMore] = useState(false);
  const Navigate = useNavigate()
  const {user} = useContext(AuthContext)
useEffect(()=>{
  if (!user) {
    Navigate("/login",{replace:true})
  }
})
  const handleMore = () => {
    setMore(!more);
  };
  return (
    <>
      <Banner />
      {/* <Cards Url={originals} title="NEW RELEASE💫" /> */}
      <Cards Url={action} title="ACTION MOVIES💫" />
      <Cards Url={Horror} title="HORROR💫" isSmall />

      {more ? (
        <>
          <Cards Url={action} title="ACTION MOVIES💫" isSmall />
          <Cards Url={Horror} title="HORROR💫" isSmall />
          <div className="flex justify-center my-5">
          <button
            className="btn glass  "
            onClick={() => {
              handleMore();
            }}
          >
            show less
          </button>
        </div>
        </>
      ) : (
        <div className="flex justify-center my-5">
          <button
            className="btn glass  "
            onClick={() => {
              handleMore();
            }}
          >
            show more
          </button>
        </div>
      )}
    </>
  );
}

export default Home;
