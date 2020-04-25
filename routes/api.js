const express = require('express');
const dataRouter = require('./data');
const { getJSON } = require('../controllers/data');
const apiRouter = express.Router();

//apiRouter.use('/data', dataRouter);

apiRouter.get('/', (req, res, next) => {
  // const apiData = getJSON();
  // console.log(apiData);
  // res.send(apiData);
  // res.render('index.ejs', apiData);
  res.send({ msg: 'API Running fine' });
});

apiRouter.use('/data', dataRouter);

module.exports = apiRouter;