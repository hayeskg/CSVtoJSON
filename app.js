const express = require('express');
const apiRouter = require('./routes/api');
const app = express();
//
const CSVToJSON = require('csvtojson');
const fs = require('fs');

app.use(express.json());
app.use(express.static('public'));
app.set('view-engine', 'ejs');

app.use('/api', apiRouter);


CSVToJSON().fromFile('./data/source.csv').then(source => {
  source.push({
    'id': '14',
    'system': 'vehicle3',
    'version': '0.4',
    'd1': '22',
    'd2': '67',
    'd3': 'true',
  });
  const outFormat = { 'data': [...source] };
  fs.writeFileSync('./data/output.json', JSON.stringify(outFormat, null, 2));
});



app.listen(8000, (err) => {
  if (err) next(err);
  else console.log('Listening on port 8000...')
});