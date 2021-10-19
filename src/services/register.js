import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const register = (e, email, password) => {
  const auth = getAuth();
  e.preventDefault();
   
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // it successfully created a new user with email and password
        const user = userCredential.user;
        console.log('user',user);
        if (userCredential) {
          return user
        }
      })
      .catch((error) => alert(error.message));

};

export const auth = getAuth();


