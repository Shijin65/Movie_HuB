import { createContext, useContext, useEffect, useState } from "react";
import ToastContext from "./Toastcontext";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextprovider = ({ children }) => {
  const Navigate = useNavigate();
  const { toast } = useContext(ToastContext);
  const [user, setUser] = useState(null);
  const location = useLocation();

useEffect(()=>{
  
  setUser(JSON.parse(localStorage.getItem("user")));
  currentUser();
},[])
  // CURRENT USER ........................................................

  const currentUser = async () => {
    try {
      const res = await fetch(`http://localhost:8001/api/user/current`, {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("auth")}` },
      });
      const userres = await res.json();
      // console.log(userres)
      if (!userres.error) {
        if (location.pathname === "/login" || location.pathname === "/register") {
          Navigate("/home", { replace: true });
          toast.success(`welcome back MR. ${userres.username}`);
        } else {
          Navigate(location.pathname ? location.pathname : "/");
        }
      } else {
        console.log(userres.error);
        toast.error("please login");
        localStorage.clear();
        Navigate("/", { replace: true });
        setUser(null);
      }
    } catch (error) {
      toast.error("server not responding");
      toast.error(error);
      console.log(error);
    }
  };

  //REGISTER USER ........................................................

  const RegisterUser = async (userData) => {
    console.log(userData);

    try {
      const res = await fetch("http://localhost:8001/api/user/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const userres = await res.json();
      if (!userres.error) {
        toast.success("registeration success");
        Navigate("/login", { replace: true });
      } else {
        console.log(userres.error);
        toast.error(userres.error);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  //LOGIN USER ........................................................

  const LoginUser = async (userData) => {
    console.log(userData);
    try {
      const res = await fetch("http://localhost:8001/api/user/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const userres = await res.json();
      if (!userres.error) {
        localStorage.setItem("auth", userres.accesstoken);
        localStorage.setItem("user", JSON.stringify(userres.user));
        setUser(userres.user);
        toast.success(`welcome home ${userres.user.username}`);
        Navigate("/home", { replace: true });
      } else {
        toast.error(userres.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ RegisterUser, LoginUser, user ,setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
