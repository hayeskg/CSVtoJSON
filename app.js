const CSVToJSON = require('csvtojson');
const fs = require('fs');

CSVToJSON().fromFile('./source.csv').then(source => {
  source.push({
    'id': '14',
    'system': 'vehicle3',
    'version': '0.4',
    'd1': '22',
    'd2': '67',
    'd3': 'true',
  });
  const outFormat = { 'data': [...source] };
  console.log(outFormat);
  fs.writeFileSync('./output.json', JSON.stringify(outFormat, null, 2));
});