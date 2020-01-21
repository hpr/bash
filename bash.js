const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const firstword = cmd.split(' ')[0];
  if (firstword === 'pwd') {
    pwd();
  } else if (firstword === 'ls') {
    ls();
  } else if (firstword === 'cat') {
    cat(cmd);
  } else if (firstword === 'curl') {
    curl(cmd);
  };
});
