import { createContext, useContext } from "react";
import ToastContext from "./Toastcontext";


const AuthContext = createContext();

export const AuthContextprovider = ({ children }) => {

  const {Toast}=useContext(ToastContext)
  const RegisterUser = async (userData) => {
    console.log(userData)

    try {
      const res = await fetch("http://localhost:8001/api/user/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      })

      const userres = await res.json()

      if (!userres.error) {
        console.log("everything is fine");
        Toast.success("registeration success")
      } else {
        console.log(userres.error)
      }


    } catch (error) {

    }
  }
  return (
    <AuthContext.Provider value={{ RegisterUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext
