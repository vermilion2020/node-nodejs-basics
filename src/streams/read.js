import fs from 'fs';
import path from 'path';
import { getDirname } from '../helper.js';

const __dirname = getDirname(import.meta.url);

const read = async () => {
  const rs = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'), { encoding: 'utf8' });

  rs.on('data', (ch) => {
    process.stdout.write(ch);
    process.stdout.write('\n');
  });
};

await read();