const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');
const { connect } = require('mongoose');
const cors = require('cors');

const nautilusRouter = require('../src/router/nautilusRouter');

const app = express();
app.use(morgan('tiny'));
const port = process.env.PORT || 5000;

app.use(express.json());

connect('mongodb+srv://admin:admin@cluster0.jigvp.mongodb.net/DiveLog',
  { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use('/api/v1/nautilus', nautilusRouter);

app.listen(port, () => { debug(`Server listening on ${port}`); });
