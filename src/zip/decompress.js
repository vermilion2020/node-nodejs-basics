import { getDirname } from '../helper.js';
import { createWriteStream, createReadStream } from 'fs';
import path from 'path';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';

const decompress = async () => {
  const __dirname = getDirname(import.meta.url);

  const rs = createReadStream(path.join(__dirname, 'files', 'archive.gz'));
  const ws = createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));

  
  pipeline(rs, createGunzip(), ws, (err) => {
    if (err) {
      console.error('An error occurred while decompressing the file: ', err);
    } else {
      console.log('The file decompressed without errors');
    }
  })
};

await decompress();