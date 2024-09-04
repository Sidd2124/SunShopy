const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Static data instead of MongoDB
const staticData = [
  { _id: '1', name: 'Item 1', value: 10 },
  { _id: '2', name: 'Item 2', value: 20 },
  { _id: '3', name: 'Item 3', value: 30 }
];

app.get('/api/data', (req, res) => {
  try {
    res.json(staticData);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000; // Changed to port 5000 to avoid conflicts
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
