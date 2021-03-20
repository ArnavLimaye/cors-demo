const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*')
  res.send('Requests from all origins are allowed')
})

// Step 1
app.options('*', function(req,res) {
  res.status(204);
  // Step 2
  res.set('Access-Control-Allow-Origin', '*')
  //Step 3
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  res.send('Successful');
})
 
app.listen(3337)