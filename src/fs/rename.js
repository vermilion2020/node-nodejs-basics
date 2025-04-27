import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import { getDirname, FS_ERROR_MESSAGE } from '../helper.js'

const rename = async () => {
  const __dirname = getDirname(import.meta.url);
  
  const originalPath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const renamedPath = path.join(__dirname, 'files', 'properFilename.md');

  if (!fs.existsSync(originalPath) || fs.existsSync(renamedPath)) {
    throw new Error(FS_ERROR_MESSAGE);
  } else {
    await fsPromises.rename(originalPath, renamedPath);
  }
};

await rename();