const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*')
  res.send('Requests from all origins are allowed')
})
 
app.listen(3335)