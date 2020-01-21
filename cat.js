const fs = require('fs');

module.exports = function(done, cmd) {
  let filename = cmd.split(' ')[1];
  fs.readFile(filename, (err, data) => {
    if (err) throw err;
    done(data);
  });
};
