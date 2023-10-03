import React from "react";
import "./App.css";
// import { Tv_Series } from "./url";

// import Banner from "./Components/Banner/Banner";
import { Routes as Switch, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Entrance from "./Pages/Entrance";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { AuthContextprovider } from "./Context/Authcontext";
import { ToastContextProvider } from "./Context/Toastcontext";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <ToastContextProvider>
        <AuthContextprovider>
          <Layout>
            <Switch>
              <Route path="/" Component={Entrance} />
              <Route path="/login" Component={Login} />
              <Route path="/register" Component={Register} />
              <Route path="/Home" Component={Home} />
            </Switch>
          </Layout>{" "}
        </AuthContextprovider>
      </ToastContextProvider>
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
