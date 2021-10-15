import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
