
const fs = require('fs');

const fetchJSON = (cb) => {
  console.log('hi from data model');
  fs.readFile('data/output.json', 'utf-8', (err, data) => {
    if (err) console.log(err);
    else {
      const jsonData = JSON.parse(data);
      cb(null, jsonData);
    }
  });
};

module.exports = { fetchJSON };
