import React from 'react'
import ButtonLogin from '../../atoms/ButtonLogin/ButtonLogin'
import ButtonRegister from '../../atoms/ButtonRegister/ButtonRegister'
import EmailInput from '../../atoms/EmailInput/EmailInput'
import PasswordInput from '../../atoms/PasswordInput/PasswordInput'
import TermsForSignup from '../../atoms/TermsForSignup/TermsForSignup'
import styles from './LoginContainer.module.css'

function LoginContainer({email, emailOnChange, password, passwordOnChange}) {
  return (
    <div className={styles.login__container}>
      <h1>Sign-in</h1>

      <form>
        <EmailInput email={email} onChange={emailOnChange}/>
        <PasswordInput password={password} onChange={passwordOnChange}/>
        <ButtonLogin/>
      </form>
      <TermsForSignup/>
      <ButtonRegister/>
      
    </div>
  )
}

export default LoginContainer
