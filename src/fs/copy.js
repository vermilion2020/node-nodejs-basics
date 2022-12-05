import fs, { promises as fsPromises } from 'fs';

const copy = async () => {
    const fPath = './files';
    const fCopyPath = './files_copy';
    if (fs.existsSync(fPath) && !fs.existsSync(fCopyPath)) {
      await fsPromises.mkdir(fCopyPath, { recursive: true });
      fsPromises.readdir(fPath).then(async (res) => {
        res.forEach(async (f) => {
          await fsPromises.copyFile(`${fPath}/${f}`, `${fCopyPath}/${f}`);
        });
      });
    } else {
      throw new Error('FS operation failed');
    }
};

copy();