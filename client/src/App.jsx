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

