import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";

import Home from "./pages/index";
import AboutMe from "./pages/aboutMe";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/aboutme" exact component={AboutMe} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

// export default App;

// import React from "react";
// import './App.css';
// import Navbar from './components/Navbar';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Home from './components/pages/Home'
// import Services from './components/pages/Services'
// import Products from './components/pages/Products'
// import SignUp from './components/pages/SignUp'

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/aboutme" exact component={AboutMe} />
//       </Switch>
//     </Router>
//   );
// }

export default App;
