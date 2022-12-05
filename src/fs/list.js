import fs, { promises as fsPromises } from 'fs';

const list = async () => {
    const fPath = './files';
    if (fs.existsSync(fPath)) {
      fsPromises.readdir(fPath).then(async (res) => {
        res.forEach(async (f) => {
          console.log(f);
        });
      });
    } else {
      throw new Error('FS operation failed');
    }
};

await list();