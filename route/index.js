const express = require('express')
const app = express()
 
app.get('/route', function (req, res) {
  res.send('Route Service!')
})
 
app.listen(process.env.SERVICE_PORT)