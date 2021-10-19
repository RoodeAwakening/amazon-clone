import { auth } from "../firebase";
export const signIn = (e, email, password) => {
  console.log('signIn', e, email, password);
  e.preventDefault();
  auth 
    .signInWithEmailAndPassword(email, password)
    .then(cred => {
      console.log(cred);
      return true;
    })
    .catch(error => {
      console.log(error);
      return false;
    }
  );
};