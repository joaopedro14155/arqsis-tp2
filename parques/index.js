const express = require('express')
const app = express()
 
app.get('/parques', function (req, res) {
  res.send('Parques Service!')
})
 
app.listen(process.env.SERVICE_PORT)