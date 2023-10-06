import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/Authcontext";

function Navbar() {
  const Navigate = useNavigate()
  const { user, setUser } = useContext(AuthContext);
  if (user) {
    var avatarLetter = user.username.match(/\b(\w)/g);
    console.log(user);
  }

  return (
    <div className="navbar bg-base-100 z-50	fixed">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          MOVIE_HUB
        </a>
      </div>

      <div className="flex-none">
        {user ? (
          <>
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Profile{" "}
            </button>

            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-5/6 max-w-2xl ">
                <h3 className="font-bold text-lg">profile</h3>
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                {/*  */}
                <div
                  className="avatar placeholder"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    tabIndex={0}
                    className="bg-sky-950 text-white rounded-full w-20"
                  >
                    <span>{avatarLetter}</span>
                  </div>
                </div>
                {/* */}
                <p className="py-4 font-bold text-lg">Name : {user.username}</p>
                <p className="py-4 font-bold text-lg">Login with : Email</p>
                <p className="py-4 font-bold text-lg">Email : {user.email}</p>

                <div className="modal-action">
                  <button
                    className="btn btn-error"
                    onClick={() => {
                      setUser(null);
                      localStorage.clear();
                      Navigate("/login",{replace:true})
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </dialog>

            <div className="dropdown dropdown-end">
              <div className="avatar placeholder ">
                <div
                  tabIndex={0}
                  className=" bg-sky-950  text-white rounded-full w-12"
                >
                  <span>{avatarLetter}</span>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-blue-950 rounded-box w-52"
              >
                <li className="text-xl text-center text-white">
                  {user.username}
                </li>
                <li></li>
              </ul>
            </div>
          </>
        ) : (
          <ul className="menu menu-horizontal px-2  text-white text-base">
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          </ul>
        )}
      </div>
    </div>

    // <div className='navbar' >
    //     <img className='netflixlogo' src="https://i.pinimg.com/564x/40/29/e8/4029e81f1da34e646b778f8dae172d65.jpg" alt="" /><h2 style={{color:"white"}}>MOVIE HUB</h2>

    // </div>
  );
}

export default Navbar;
