const { fetchJSON } = require('../models/data');


function getJSON(req, res, next) {
  fetchJSON((err, apiData) => {
    if (err) next(err);
    console.log(apiData);
    res.send({ apiData });
  });
};

module.exports = { getJSON };