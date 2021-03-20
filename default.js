const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Only the requests from same origin are allowed')
})
 
app.listen(3333)