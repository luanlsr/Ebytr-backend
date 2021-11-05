const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const error = require('./middlewares/error')

const app = express();
const routerUser = require('./routes/routerUser');
const routerTask = require('./routes/routerTask');

// const error = require('./middlewares/error');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))
app.use(bodyParser.json());

app.use('/user', routerUser);
app.use('/task', routerTask);

app.use(error)

app.listen(PORT, () => {
  console.log(`ouvindo porta ${PORT}!
  Acessar: http://localhost:3001`)
});