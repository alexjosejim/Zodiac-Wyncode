import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"



      // response.forEach(item => console.log(item.famous_people) )




ReactDOM.render(<App/>, document.getElementById("characters"))
registerServiceWorker()
