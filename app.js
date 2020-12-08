const express = require('express')
const app = express()
const port = 5000
const hostname = 'localhost';

//importing routes
const productRouter = require("./routes/product.js")

app.get('/', (req, res) => {
  res.json({
    username: "philari",
    password: "xxxxx",
    description: "logins",
    msg: "Hello from server"
   })
});

//middleware
app.use("/static", express.static("public"));
app.use("/product", productRouter);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});