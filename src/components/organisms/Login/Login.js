import React, { useState } from 'react';
import styles from './Login.module.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../../firebase";



import LogoSignIn from "../../atoms/LogoSignIn/LogoSignIn"
import LoginContainer from '../../molecules/LoginContainer/LoginContainer';

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const signIn = (e) => {
  //   e.preventDefault();

  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       history.push("/");
  //     })
  //     .catch((error) => alert(error.message));
  // };

  // const register = (e) => {
  //   e.preventDefault();

  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       // it successfully created a new user with email and password
  //       if (auth) {
  //         history.push("/");
  //       }
  //     })
  //     .catch((error) => alert(error.message));
  // };


  return (
    <div className={styles.login}>
      <LogoSignIn/>
      <LoginContainer  email={email} emailOnChange={(e)=>{setEmail(e.target.value)}}  password={password} passwordOnChange={(e)=>{setPassword(e.target.value)}}/>
      
    </div>
  )
}

export default Login
