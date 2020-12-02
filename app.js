const express = require('express')
const app = express()
const port = 6000
const hostname = 'localhost';

app.get('/', (req, res) => {
  res.send('Hello From The Server')
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});