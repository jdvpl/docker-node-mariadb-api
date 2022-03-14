const express = require('express');
const cors = require('cors');
const app = express();
const port=process.env.PORT || 4000;
require('dotenv').config()
app.use(cors({ origin: true }));


app.listen(port,()=>{
  console.log("first")
})