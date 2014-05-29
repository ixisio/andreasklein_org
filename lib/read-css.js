var fs = require('fs');

module.exports = function(file, cb) {

  if (!file || file === '') {
    return false;
  }

  fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    cb(data);
  });
};
