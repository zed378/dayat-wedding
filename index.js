const express = require('express');
require('dotenv').config();
const { Connection } = require('./config');
const cors = require('cors');
const message = require('./src/routes/message');
const migrate = require('./src/routes/migration');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set('trust proxy', 1);

app.use('/api/v1/', message);
app.use('/migrate', migrate);
app.get('/', (req, res) => {
  res.status(200).send({
    status: 'Success',
    message: 'Your API is running',
  });
});

Connection();

const port = process.env.PORT || 5000;

app.listen(port, () => console.debug(`Server running on port: ${port}`));
