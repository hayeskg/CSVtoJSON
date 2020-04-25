const express = require('express');
const { getJSON } = require('../controllers/data');
const dataRouter = express.Router();

// dataRouter.route('/', (req, res, next)->{
//   res.send()
//   const apiData = getJSON();
//   console.log(apiData);
//   res.send(apiData);
//   // res.render('index.ejs', apiData);
//   //   res.send({ msg: 'API Running fine' });
// }).get(getJSON);
dataRouter.route('/').get(getJSON);

module.exports = dataRouter;