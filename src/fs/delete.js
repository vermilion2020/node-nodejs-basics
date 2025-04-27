import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import { getDirname, FS_ERROR_MESSAGE } from '../helper.js'

const remove = async () => {
  const __dirname = getDirname(import.meta.url);

  const  filePath = path.join(__dirname, 'files', 'fileToRemove.txt');
  if (!fs.existsSync(filePath)) {
    throw new Error(FS_ERROR_MESSAGE);
  } else {
    await fsPromises.rm(filePath);
  }
};

await remove();