import React, { useContext, useState } from "react";
// import AuthContext from '../Context/Authcontext'
import Banner from "../Components/Banner/Banner";
import Cards from "../Components/Cards/Cards";
import { originals, action, Horror } from "../url";

function Home() {
  const [more, setMore] = useState(false);

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
          <Cards Url={originals} title="NEW RELEASE💫" isSmall />
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
