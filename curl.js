const request = require('request');

module.exports = function(cmd) {
  let url = cmd.split(' ')[1];
  request(url, function (error, response, body) {
    if (error) throw error;
    process.stdout.write(body);
    process.stdout.write('prompt > ');
  });
}
