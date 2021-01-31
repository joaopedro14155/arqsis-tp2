const express = require('express')
const app = express()
 
app.get('/payment', function (req, res) {
  res.send('Payment Service!')
})
 
app.listen(process.env.SERVICE_PORT)