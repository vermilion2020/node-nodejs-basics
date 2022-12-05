import * as fs from 'fs';

const write = async () => {
    var writableStream = fs.createWriteStream('./files/fileToWrite.txt');
    process.stdout.write('Enter your message\n');
    process.stdin.on('data', data => {
        writableStream.write(data);
      });
};

await write();