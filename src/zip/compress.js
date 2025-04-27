import { getDirname } from '../helper.js';
import { createWriteStream, createReadStream } from 'fs';
import path from 'path';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const compress = async () => {
  const __dirname = getDirname(import.meta.url);

  const rs = createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
  const ws = createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
  
  pipeline(rs, createGzip(), ws, (err) => {
    if (err) {
      console.error('An error occurred while compressing the file: ', err);
    } else {
      console.log('The file compressed without errors');
    }
  })
};

await compress();