const express = require('express')
const app = express()
 
app.get('/price', function (req, res) {
  res.send('Price Service!')
})
 
app.listen(process.env.SERVICE_PORT)