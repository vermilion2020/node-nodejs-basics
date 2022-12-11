import * as fs from 'fs';
import path from 'path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    var writableStream = fs.createWriteStream(`${__dirname}/files/fileToWrite.txt`);
    process.stdout.write('Enter your message\n');
    process.stdin.on('data', data => {
        writableStream.write(data);
      });
};

await write();