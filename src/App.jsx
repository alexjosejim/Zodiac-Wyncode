import React from "react"
import { BrowserRouter, Route} from "react-router-dom"
import HoroscopeDisplay from "./components/pages/HoroscopeDisplay"
import Calculator from "./components/pages/Calculator"
import "./components/styles/Calculator.css"

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={ Calculator } />
        <Route exact path='/zodiac/:zodiac' component={ HoroscopeDisplay } />
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App
