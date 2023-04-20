const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(router);

// app.get('/', async (req, res) => {
//   return res.json({ message: 'Hello, World ✌️' });
// });

const start = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017');
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
