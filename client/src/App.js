import React from "react";
import "./App.css";
// import { Tv_Series } from "./url";

import Banner from "./Components/Banner/Banner";
import { Routes as Switch, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Entrance from "./Pages/Entrance";


function App() {


  return (
    <div>
<Layout>

    <Switch>
        <Route path="/"Component={Entrance}/>
        <Route path="/register" Component={Banner}/>
    </Switch>
</Layout>
    </div>
  );
}

export default App;
        // {/* <Cards Url={originals}  title="Shitflix"  /> */}
        // {/* <Cards Url={action}  title="Action" isSmall /> */}
        // {/* <Cards Url={Horror}  title="Horror" isSmall /> */}
        // <div
        //   className="button_container"
        //   style={{ textAlign: "center", marginBottom: "20px" }}
        // >
        //   <button
        //     className="button"
        //     onClick={() => {
        //       setstate(!state);
        //     }}
        //   >
        //     show more
        //   </button>
        // </div>
        // {state && <Cards Url={Tv_Series} title="Tv Series" />}