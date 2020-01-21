const request = require('request');

module.exports = function(done, cmd) {
  let url = cmd.split(' ')[1];
  request(url, function (error, response, body) {
    if (error) {
      throw error;
    };
    done(body);
  });
};
