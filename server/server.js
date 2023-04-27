const express = require('express');
const router = require('./routes/router');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const PORT = 3001;

app.use(cors())
  .use(bodyParser.json())
  .use(router);

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

module.exports(app);