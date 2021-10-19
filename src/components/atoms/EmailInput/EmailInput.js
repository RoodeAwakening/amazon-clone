import React from "react";
import styles from './EmailInput.module.css'

function EmailInput({ email, onChange }) {
  return (
    <h5 className={styles.EmailInput}>
      <input type="text" value={email} onChange={onChange} className={styles.input} />
    </h5>
  );
}

export default EmailInput;
