import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import About from "./components/About/About";
import Challenges from "./components/Challenges/Challenges";
import Footer from "./components/Footer";
// import Resume from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/scoreboard" exact component={Scoreboard} />
          <Route path="/challenges" component={Challenges} />
          <Route path="/about" component={About} />
          {/* <Route path="/resume" component={Resume} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
