import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import { getDirname, FS_ERROR_MESSAGE } from '../helper.js';

const create = async () => {
  const __dirname = getDirname(import.meta.url);
  
  const filePath = path.join(__dirname, 'files/fresh.txt');
  if(fs.existsSync(filePath)) {
    throw new Error(FS_ERROR_MESSAGE)
  } else {
    await fsPromises.writeFile(path.join(__dirname, 'files/fresh.txt'), 'I am fresh and young');
  }
};

await create();