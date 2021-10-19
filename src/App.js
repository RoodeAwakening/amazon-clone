import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import Home from "./components/pages/Home/Home";
import { auth } from "./firebase";
import {useStateValue} from "./services/StateProvider"
import CheckoutPage from "./components/pages/CheckoutPage/CheckoutPage"

function App() {
  const [{ basket, user }, dispatch] = useStateValue();


  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log("the user is -->", authUser);
      if(authUser){
        // the user was or just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })

      }else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  },[])

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path ="/login">
            <LoginPage/>
          </Route>
          <Route exact path ="/checkout">
            <CheckoutPage/>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
