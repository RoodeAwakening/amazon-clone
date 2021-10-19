import React from 'react'
import ButtonLogin from '../../atoms/ButtonLogin/ButtonLogin'
import ButtonRegister from '../../atoms/ButtonRegister/ButtonRegister'
import EmailInput from '../../atoms/EmailInput/EmailInput'
import PasswordInput from '../../atoms/PasswordInput/PasswordInput'
import TermsForSignup from '../../atoms/TermsForSignup/TermsForSignup'
import styles from './LoginContainer.module.css'
import { Link, useHistory } from "react-router-dom";

import {signIn} from '../../../services/signIn'
import {register} from '../../../services/register'
import { auth } from "../../../firebase";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




function LoginContainer({email, emailOnChange, password, passwordOnChange}) {
  const auth = getAuth();



  const history = useHistory()
  const signIn = (e) => {
    console.log('test');
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
   
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // it successfully created a new user with email and password
        const user = userCredential.user;
        console.log('user',user);
        if (userCredential) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };


  return (
    <div className={styles.login__container}>
      <h1>Sign-in</h1>

      <form>
        <EmailInput email={email} onChange={emailOnChange}/>
        <PasswordInput password={password} onChange={passwordOnChange}/>
        <ButtonLogin onClick={signIn}/>
      </form>
      <TermsForSignup/>
      <form>

      <ButtonRegister onClick={register} />
      </form>
      
    </div>
  )
}

export default LoginContainer
