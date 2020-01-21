const fs = require('fs');

module.exports = function(cmd) {
  let filename = cmd.split(' ')[1];
  fs.readFile(filename, (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
    process.stdout.write('prompt > ');
  });
};
