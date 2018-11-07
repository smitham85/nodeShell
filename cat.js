const fs = require('fs');

module.exports = (filename, done) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      done(err.stack);
    } else {
      done(data);
    }
  });
};
