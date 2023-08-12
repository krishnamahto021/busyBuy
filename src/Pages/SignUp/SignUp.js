import styles from "./SignUp.module.css";
import { SignInButton } from "../../Components/Buttons/SignInButton";
import { useState } from "react";
import { useUserContextValue } from "../../userAuthenticationContext";

export const SignUp = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {signUpUser} = useUserContextValue();

  function clearInputs(){
    setName("");
    setEmail("");
    setPassword("");
  }

  async function handleSubmit(e){
    e.preventDefault();
    // to add user into database
    signUpUser(name,email,password);
    clearInputs();
  }
  return (
    <>
      <div className={styles.container}>
        <h1>Sign Up</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e)=>{
              setName(e.target.value)
            }}
            required
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            required
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required
            className={styles.input}
          />
          <SignInButton text={"Sign Up"} />
        </form>
      </div>
    </>
  );
};
