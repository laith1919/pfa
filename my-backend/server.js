const express = require('express');
const cors = require('cors'); 
const axios = require('axios');
const { MongoClient } = require('mongodb');
const app = express();
const port = 5000;

// Replace with your MongoDB connection string
const url = 'mongodb://localhost:27017';
const dbName = 'webstore';
app.use(cors());
app.get('/', (req, res) => {
  res.send('Server is running!');
});
async function main() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection('products');

    // Define routes
    app.get('/api/products', async (req, res) => {
      try {
        const products = await collection.find({}).toArray();
        res.json(products);
      } catch (error) {
        res.status(500).send(error.message);
      }
    });
    

    // Start server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
