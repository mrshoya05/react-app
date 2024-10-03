const fs = require('fs');
let obj;
fs.readFile('./data.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  console.log(obj.name);
  
});