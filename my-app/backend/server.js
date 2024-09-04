const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const http = require('http');

const app = express();


app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://tsiddu805:gzYdNLA1kGYdE7uR@cluster1.vvwfp.mongodb.net/sample_supplies')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


const TestSchema = new mongoose.Schema({
  Name: String,
  
Location:String 
});


const Test = mongoose.model('Test', TestSchema, 'Test');


app.get('/Test', async (req, res) => {
  try {
    const tests = await Test.find(); // Retrieve all documents
    console.log(tests); // Log fetched data for debugging
    res.status(200).json(tests);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch tests', details: error.message });
  }
});

// Server setup
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
