import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import { getDirname, FS_ERROR_MESSAGE } from '../helper.js'

const read = async () => {
  const __dirname = getDirname(import.meta.url);
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  if (!fs.existsSync(filePath)) {
    throw new Error(FS_ERROR_MESSAGE);
  } else {
    const fileContent = await fsPromises.readFile(filePath, 'utf-8');
    console.log(fileContent);
  }
};

await read();