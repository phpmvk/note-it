const express = require('express');
const app = express();
const router = require('./routes/router');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const { PORT, dbName } = require('./config')

app.use(cors())
  .use(bodyParser.json())
  .use(router);

const start = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/' + dbName);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

module.exports = app;