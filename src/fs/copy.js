import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import { getDirname, FS_ERROR_MESSAGE } from '../helper.js';

const copy = async () => {
  const __dirname = getDirname(import.meta.url);

  const sourcePath = path.join(__dirname, 'files');
  const destinationPath = path.join(__dirname, 'files_copy');

  if(!fs.existsSync(sourcePath) || fs.existsSync(destinationPath)) {
    throw new Error(FS_ERROR_MESSAGE);
  } else {
    await fsPromises.cp(sourcePath, destinationPath, { recursive: true });
  }
};

await copy();
