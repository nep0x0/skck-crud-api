require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const skckRoutes = require('./routes/skckRoutes');

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/skck', skckRoutes);

app.get("/", (req, res) => {
  res.send("Hello from node API server!");
});

// Simplified connection without deprecated options

mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });




