const express = require("express");
const router = express.Router();
const fetch = require('node-fetch')

// All your server routes will be defined under this line. Remember that all the front-end request routes must start with '/api'

// Example:
// router.get('/users', (request, response) => {
//   response.json({result: ['red', 'green', 'blue']})
// })

router.get('/sign/:zodiac', (request, response) => { //this route accepts the request from react
  console.log( "the sign: ",request.params.zodiac)
 fetch(`https://zodiacal.herokuapp.com/${request.params.zodiac}`)
   .then( res=>res.json() )
   .then( data => {
     console.log(data)
     response.json( data ) //this is express responding to react
   })
})


module.exports = router;
