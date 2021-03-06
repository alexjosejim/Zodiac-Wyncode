﻿import React from "react"
import { BrowserRouter, Route} from "react-router-dom"
import HoroscopeDisplay from "./components/pages/HoroscopeDisplay"
import Calculator from "./components/pages/Calculator"
import Navigation from "./components/pages/Navigation"
import Footer from "./components/pages/Footer"
import Share from "./components/pages/Share"
import "./components/Styles/Styles.css"
import "bootstrap/dist/css/bootstrap.css"


const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navigation/>
          <Route exact path="/" component={ Calculator } />
          <Route exact path='/zodiac/:zodiac' render={ props => <HoroscopeDisplay {...props} key={props.match.params.zodiac} /> } />
        <Route exact path='/zodiac' component={Navigation} />
        <Footer/>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
