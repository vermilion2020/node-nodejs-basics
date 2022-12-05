import fs, { promises as fsPromises } from 'fs';

const remove = async () => {
    const fPath = './files/fileToRemove.txt';
    if (fs.existsSync(fPath)) {
      await fsPromises.unlink(fPath);
    } else {
      throw new Error('FS operation failed');
    } 
};

await remove();