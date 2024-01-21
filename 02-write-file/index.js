const fs = require('fs');
const path = require('path');
const writeableStream = fs.createWriteStream(path.join(__dirname, 'file.txt'));
const { stdin, stdout } = require('process');

stdout.write('Good afternoon! Please, enter the text in console: \n');

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    stdout.write('Good Buy');
    process.exit();
  }
  writeableStream.write(data);
});

process.on('SIGINT', () => {
  stdout.write('Good Buy');
  process.exit(0);
});
