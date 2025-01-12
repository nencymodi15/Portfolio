const express = require('express');
const app= express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
//mongodb cloud connection string
const DB_URI  = process.env.CONNSTRING;


//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('welcome to my portfolio')
});

// Async function to connect to MongoDB
const connectToMongoDB = async () => {
    try {
      await mongoose.connect(DB_URI);
      console.log('Connected to MongoDB Cloud');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1); // Exit the application if the connection fails
    }
  };

  //connect to MongoDB
  connectToMongoDB();

//start the server 
app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`);
})