import React from 'react'
import ButtonLogin from '../../atoms/ButtonLogin/ButtonLogin'
import ButtonRegister from '../../atoms/ButtonRegister/ButtonRegister'
import EmailInput from '../../atoms/EmailInput/EmailInput'
import PasswordInput from '../../atoms/PasswordInput/PasswordInput'
import TermsForSignup from '../../atoms/TermsForSignup/TermsForSignup'
import styles from './LoginContainer.module.css'
import { useHistory } from "react-router-dom";



import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";




function LoginContainer({email, emailOnChange, password, passwordOnChange}) {
  const auth = getAuth();



  const history = useHistory()

  
  const signIn = (e) => {
    console.log('test');
    e.preventDefault();
    
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed In
      const user = userCredential.user;
      if(user){

        history.push("/");
      }
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

      <form onSubmit={signIn}>
        <EmailInput email={email} onChange={emailOnChange}/>
        <PasswordInput password={password} onChange={passwordOnChange}/>
        <ButtonLogin />
      </form>
      <TermsForSignup/>
      <form>

      <ButtonRegister onClick={register} />
      </form>
      
    </div>
  )
}

export default LoginContainer
