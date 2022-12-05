import fs, { promises as fsPromises } from 'fs';

const rename = async () => {
    const oldName = './files/wrongFilename.txt';
    const newName = './files/properFilename.md';
    if (fs.existsSync(oldName) && !fs.existsSync(newName)) {
      await fsPromises.rename(oldName, newName);
    } else {
      throw new Error('FS operation failed');
    }
};

await rename();