import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
// Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <div style={{"marginTop": "62px"}}>
          <Alert />
        </div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="register"
            element={
              <section className="container">
                <Register />
              </section>
            }
          />
          <Route
            path="login"
            element={
              <section className="container">
                <Login />
              </section>
            }
          />
        </Routes>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
