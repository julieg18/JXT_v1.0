import React, { useState, useEffect } from "react";
import "./App.css";
import InsertPage from "./pages/InsertPage/InsertPage";
import TrackPage from "./pages/TrackPage/TrackPage";
import SecretEnterPage from "./pages/InsertPage/auth_InsertPage/auth_InsertPage";
import SecretTrackPage from "./pages/TrackPage/auth_TrackPage/auth_TrackPage";
import Error401Page from "./pages/Error401Page/Error401Page";
import Navbar from "./components/NavBar/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/secret")
      .then((res) => res.json())
      .then((data) => {
        setData(data.success);
      });
  }, []);

  const linkStyle = {
    margin: "0rem",
    textDecoration: "none",
    color: "white",
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="container-fluid">
      <header className="row m-5">
        <Router>
          <div>
            <Navbar
              RouterLinkHome={
                <Link to="/" style={linkStyle}>
                  JXT Job Tracker
                </Link>
              }
              RouterLinkEnter={
                <Link to="/enter-page" style={linkStyle}>
                  Enter
                </Link>
              }
              RouterLinkTrack={
                data !== true ? (
                  <Link to="/track-page" style={linkStyle}>
                    Track
                  </Link>
                ) : (
                  <Link to="/secret-page" style={linkStyle}>
                    MyTrack
                  </Link>
                )
              }
            />
            <Switch>
              <body className="row d-flex justify-content-center align-items-center mt-5">
                <Route exact path="/">
                  <TrackPage />
                </Route>
                <Route path="/enter-page">
                  {data !== true ? <InsertPage /> : <SecretEnterPage />}
                </Route>
                <Route path="/track-page" onClick={reloadPage}>
                  <TrackPage />
                </Route>
                <Route path="/secret-page">
                  {data !== true ? <Error401Page /> : <SecretTrackPage />}
                </Route>
              </body>
            </Switch>
          </div>
        </Router>
      </header>
      <footer className="fixed-bottom">
        <p className="cpText text-center mt-5">
          {data !== true ? null : "User Authenticated!"}
        </p>
      </footer>
    </div>
  );
}

export default App;
