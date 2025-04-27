import fs from 'fs';
import path from 'path';
import { getDirname } from '../helper.js';

const __dirname = getDirname(import.meta.url);

const write = async () => {
  const ws = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'), { encoding: 'utf8' });

  process.stdout.write('Enter the text to write to the file:\n');

  process.stdin.on('data', (ch) => {
    ws.write(ch);
  });
};

await write();