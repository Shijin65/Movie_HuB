import { createContext } from "react";


const AuthContext = createContext();

export const AuthContextprovider = ({ children }) => {


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
      }else{
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
