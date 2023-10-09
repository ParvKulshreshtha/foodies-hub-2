const express = require('express');
const mongoose = require('mongoose');
const FoodITEM = require('./models/FoodModels');
const UserModel = require('./models/User');
const app = express();
const port = process.env.PORT || 5000;
const mongoURI = 'mongodb+srv://kulparv:5QgQQtYZXRNKu24o@cluster0.qcfkzsk.mongodb.net/food?retryWrites=true&w=majority'; // Replace with your actual MongoDB connection URI

var cors = require('cors');
app.use(cors());


// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');
  }
  )
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use(express.json())
app.use('/api', require("./router/Auth"))
app.use('/api', require("./router/food"))

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
