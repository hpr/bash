const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const firstword = cmd.split(' ')[0];
  if (firstword === 'pwd') {
    pwd(done);
  } else if (firstword === 'ls') {
    ls(done);
  } else if (firstword === 'cat') {
    cat(done, cmd);
  } else if (firstword === 'curl') {
    curl(done, cmd);
  };
});
