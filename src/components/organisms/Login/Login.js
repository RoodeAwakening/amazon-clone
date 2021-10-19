import React, { useState } from 'react';
import styles from './Login.module.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../../firebase";

import LogoSignIn from "../../atoms/LogoSignIn/LogoSignIn"
import LoginContainer from '../../molecules/LoginContainer/LoginContainer';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.login}>
      <LogoSignIn/>
      <LoginContainer email={email} emailOnChange={(e)=>{setEmail(e.target.value)}}  password={password} passwordOnChange={(e)=>{setPassword(e.target.value)}}/>
      
    </div>
  )
}

export default Login
