import React, { useContext, useEffect, useState } from "react";
import { API_KEY, ImgUrl } from "../constants/constance";
import axios from "../constants/Axios";
import AuthContext from "../Context/Authcontext";
import { Link } from "react-router-dom";

function Login() {
  const { LoginUser } = useContext(AuthContext);
  const [Movie, setMovie] = useState([]);
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    axios.get(`/trending/movie/week?api_key=${API_KEY}`).then((response) => {
      const element = Math.floor(Math.random(10) * 10);
      setMovie(response.data.results[element]);
    });
  }, []);

  const onchangeHandle = (event) => {
    const { name, value } = event.target;
    setuserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    LoginUser({...userData});
  };

  return (
    <div className="bg-cover bg-center dark:bg-gradient-to-r from-red-950 to-black  bg-black h-screen object-cover ">
      <section className="">
        <div className="container h-full px-6 py-24 ">
          <div className=" p-4 g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src={`${ImgUrl + Movie.backdrop_path}`}
                className="w-full"
                alt="movieimage"
              />
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                LOGIN {"  "}
                <span className="text-blue-600 dark:text-red-600">HERE</span>
              </h2>
              <form onSubmit={handleSubmit}>
                {/* <!-- Email input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label for="exampleFormControlInput3" className="">
                    Email address
                  </label>
                  <input
                    type="text"
                    className=" min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-500 [&:not([data-te-input-placeholder-active])]"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    value={userData.email}
                    onChange={onchangeHandle}
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label for="Password" className="">
                    Password
                  </label>
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-500 [&:not([data-te-input-placeholder-active])]"
                    id="Password"
                    name="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={onchangeHandle}
                  />
                </div>

                {/* <!-- Remember me checkbox --> */}
                <div className="mb-6 flex  ">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] ">
                    <label
                      className="inline-block  hover:cursor-pointer"
                      for="exampleCheck3"
                    >
                      Don't have an account?
                    </label>
                  </div>

                  {/* <!-- register link --> */}
                  <Link to={"/register"}>
                    <p className="dark:text-red-500">Register?</p>
                  </Link>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="inline-block w-full rounded dark:text-red-500 hover:bg-red-500 hover:text-white px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-lg shadow-red-500 border-x hover:shadow-md hover:shadow-white"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Sign in
                </button>

                {/* <!-- Divider --> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
