const express = require('express')
const app = express()

var allowdOrigins = ['http://localhost:3000','https://technogise.com','https://www.google.com']

function isOriginAllowed(origin){
  return allowdOrigins.includes(origin);
}
app.get('/', function (req, res) {
  if(isOriginAllowed(req.headers.origin)){
    res.set('Access-Control-Allow-Origin', req.headers.origin)
  }
  res.send('Requests from only specific origins are allowed')
})
 
app.listen(3336)