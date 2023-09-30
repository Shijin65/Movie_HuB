import React, { useEffect, useState } from "react";
import { API_KEY, ImgUrl } from "../constants/constance";
import axios from "../constants/Axios";

function Register() {
  const [Movie, setMovie] = useState([]);
  const [userData, setuserData] = useState({
    username: "",
    email: "",
    password: "",
    
  });
  useEffect(() => {
    axios.get(`/trending/movie/week?api_key=${API_KEY}`).then((response) => {
      const element = Math.floor(Math.random(10) * 10);
      setMovie(response.data.results[element]);
      console.log(response.data.results[element]);
    });
  }, []);
  const onchangeHandle = (event) => {
    const { name, value } = event.target;
    console.log(event.target)
    setuserData({ ...userData, [name]: value });
  };

  return (
    <div className="bg-cover bg-center  bg-black h-full object-cover ">
      <section class="">
        <div class="container h-full px-6 py-24 ">
          <div class=" p-4 g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src={`${ImgUrl + Movie.backdrop_path}`}
                class="w-full"
                alt="Phoneimage"
              />
            </div>

            {/* <!-- Right column container with form --> */}
            <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
              <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                REGISTER{" "}
                <span className="text-blue-600 dark:text-blue-500">HERE</span>
              </h2>
              <form>
                {/* user name */}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <label for="exampleFormControlInput3" class="">
                    Name
                  </label>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-500 [&:not([data-te-input-placeholder-active])]"
                    name="username"
                    id="username"
                    placeholder="Email address"
                    value={userData.username}
                    onChange={onchangeHandle} 

                  />
                </div>
                {/* <!-- Email input --> */}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <label for="exampleFormControlInput3" class="">
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
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <label for="Password" class="">
                    Password
                  </label>
                  <input
                    type="password"
                    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-500 [&:not([data-te-input-placeholder-active])]"
                    id="Password"
                    name="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={onchangeHandle} 
                  />
                </div>
              
                {/* <!-- Remember me checkbox --> */}
                <div class="mb-6 flex items-center justify-between">
                  <div class="mb-[0.125rem] block min-h-[1.5rem] ">
                    <label
                      class="inline-block  hover:cursor-pointer"
                      for="exampleCheck3"
                    >
                      Already have an account?
                    </label>
                  </div>

                  {/* <!-- Forgot password link --> */}
                  <a
                    href="/login"
                    class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >
                    login?
                  </a>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  class="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
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

export default Register;
