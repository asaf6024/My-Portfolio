import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";

import Footer from "./components/Footer/Footer";

// Redirect immediately before rendering anything
window.location.replace("https://asafalmog.dev/");

function App() {
  const [navItemCicked, setNavItemCicked] = useState(null);

  useEffect(() => {
    // window.scroll(0, 0)
  });

  const setFunction = (item) => {
    setNavItemCicked(item);
    console.log("navItemCicked", navItemCicked);
  };
  return (
    <div className="container-fluid">
      {/* <Router> */}

      <Nav setFunction={setFunction} />
      {/* <Router> */}
      {/* <Switch> */}
      <Home navItemCicked={navItemCicked} />
      {/* <Route exact path="/" component={Home} />
      <Route exact path="/about" component={Experience} />
      <Route exact path="/websites" component={Websites} />
      <Route exact path="/skills" component={Skiils} /> */}

      {/* </Switch> */}
      {/* </Router> */}
      <Footer />
      {/* <NavigationBtn /> */}

      {/* </Router> */}
    </div>
  );
}

export default App;
