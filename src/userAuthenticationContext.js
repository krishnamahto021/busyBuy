import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc,setDoc} from "firebase/firestore";
import { db } from "./firebaseinit";

const userContext = createContext();

export function useUserContextValue() {
  const value = useContext(userContext);
  return value;
}

export const CustomUserContext = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  async function signUpUser(name, email, password) {
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userDocRef = doc(db,"users",user.uid);
      await setDoc(userDocRef,{
        name,
        email,
        cartArray:[]
      })
      toast.success("Signed Up Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Error in Signing up!", err);
    }
  }

  async function signInUser(email,password){
    const auth = getAuth();
    try{
      const userCredential = await signInWithEmailAndPassword(auth,email,password);
      setUser(userCredential.user);
      setIsAuthenticated(true);
      toast.success("Logged In Successfully!");
    }catch(err){
      toast.error(`Error in Loggin in ${err}`);
    }
  }

  return (
    <>
      <userContext.Provider
        value={{
          isAuthenticated,
          setIsAuthenticated,
          user,
          setUser,
          signUpUser,
          signInUser
        }}
      >
        {children}
      </userContext.Provider>
    </>
  );
};
