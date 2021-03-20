const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.set('Access-Control-Allow-Origin', 'https://technogise.com')
  res.send('Only the requests from technogise.com are allowed')
})
 
app.listen(3334)