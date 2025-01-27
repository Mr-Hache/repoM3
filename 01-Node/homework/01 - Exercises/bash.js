const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

function bash() {
   process.stdout.write("prompt > ")
   process.stdin.on('data', (data) => {
      const input = data.toString().split(" ");
      const cmd = input.shift().trim();
      const args = input.join(" ").trim();
    
      if(!commands[cmd]) print(`command not found: ${cmd}`);
      else commands[cmd](print, args);
   })
}

function print(output) {
   process.stdout.write(output);
   process.stdout.write('\nprompt > ');
}

bash();
module.exports = {
   print,
   bash,
};
