const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('User Service!')
})
 
app.listen(process.env.SERVICE_PORT)