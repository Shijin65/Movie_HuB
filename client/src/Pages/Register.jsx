import React, { useContext, useEffect, useState } from "react";
import { API_KEY, ImgUrl } from "../constants/constance";
import axios from "../constants/Axios";
import AuthContext from "../Context/Authcontext";



function Register() {

  const { RegisterUser } = useContext(AuthContext)
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
    setuserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    RegisterUser({ ...userData, confirmpassword: "" })
  }

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
              <form onSubmit={handleSubmit}>
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
                <div class="mb-6 flex  ">
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
                    class="dark:text-blue-500"
                  >
                    login?
                  </a>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  class="inline-block w-full rounded dark:text-blue-500 hover:bg-blue-500 hover:text-white px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-lg shadow-blue-500 border-x hover:shadow-md hover:shadow-white"
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

export default Register
