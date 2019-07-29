const express = require("express");
const router = express.Router();
let select = document.getElementById('characters')
let results
let htmlResults = document.getElementById('results')

// All your server routes will be defined under this line. Remember that all the front-end request routes must start with '/api'

// Example:
// router.get('/users', (request, response) => {
//   response.json({result: ['red', 'green', 'blue']})
// })

class Home extends React.Component {


// in react:
fetch('/api/zodiac') //this is the request to express
  .then(res=>res.json())
  .then( data => console.log(data) ) //this is the response from express

  //----------------------
  // in express
  router.get('/people', (request, response) => { //this route accepts the request from react
   fetch('https://zodiacal.herokuapp.com/api/')
     .then( res=>res.json() )
     .then( data => {
       console.log(data)
       response.json( data ) //this is express responding to react
     })
  })
  render() {
    const {zodiacData} = this.state
    return (
      <h1>Sing</h1>
    )
  }
}

const PORT = process.env.PORT || 3000




module.exports = router;
