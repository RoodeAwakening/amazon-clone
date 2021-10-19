import React from 'react'
import styles from './PasswordInput.module.css'

function PasswordInput({password, onChange}) {
  return (
    <h5 className={styles.PasswordInput}>
      <input type="text" value={password} onChange={onChange} className={styles.input}/>
    </h5>
  )
}

export default PasswordInput
