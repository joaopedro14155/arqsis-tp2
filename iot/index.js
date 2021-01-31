const express = require('express')
const app = express()
 
app.get('/iot', function (req, res) {
  res.send('Iot Service!')
})
 
app.listen(process.env.SERVICE_PORT)