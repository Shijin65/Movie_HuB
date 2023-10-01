import { createContext, useContext } from "react";
import ToastContext from "./Toastcontext";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextprovider = ({ children }) => {

  const Navigate = useNavigate();
  const { toast } = useContext(ToastContext);

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
        console.log("everything is fine");
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

  const LoginUser = async(userData) => {

    console.log(userData)
    try {
      // const res = await fetch("http://localhost:8001/api/user/login", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify(userData),
      // });

      // const userres = await res.json();
    } catch (error) {
      
    }
  }




  //CURRENT USER ........................................................

  return (
    <AuthContext.Provider value={{ RegisterUser ,LoginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
