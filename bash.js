
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  let cmdToRun = require(`./${cmd}`);
  process.stdout.write('cmd given: ' + cmd + '\n');
  cmdToRun();
});