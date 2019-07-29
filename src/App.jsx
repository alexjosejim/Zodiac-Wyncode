import React from "react"
import { BrowserRouter, Route} from "react-router-dom"
import HoroscopeDisplay from "./components/pages/HoroscopeDisplay"
import Calculator from "./components/pages/Calculator"
import Navigation from "./components/pages/Navigation"
import Footer from "./components/pages/Footer"
import "./components/Styles/Styles.css"


const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
      <Navigation/>
        <Route exact path="/" component={ Calculator } />
        <Route exact path='/zodiac/:zodiac' component={ HoroscopeDisplay } />
      <Route exact path='/zodiac' component={Navigation} />
      <Footer/>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App
