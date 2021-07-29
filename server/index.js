const express = require('express');
const cors = require('cors');
const router = require('./router');
const connection = require('./models/index');


const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(router);

async function connectDBandListen () {
  try {
    await connection;
    app.listen(port, () => {
      console.log('Server is running'); // eslint-disable-line no-console 
    });
  } catch (error) {
    console.log('error', error); // eslint-disable-line no-console 
  }
}

connectDBandListen();