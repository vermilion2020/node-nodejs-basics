import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import { getDirname, FS_ERROR_MESSAGE } from '../helper.js'

const list = async () => {
  const __dirname = getDirname(import.meta.url);
  const folderPath = path.join(__dirname, 'files');
    
  if (!fs.existsSync(folderPath)) {
    throw new Error(FS_ERROR_MESSAGE);
  } else {
    const files = await fsPromises.readdir(folderPath);
    console.log(files)
  }
};

await list();