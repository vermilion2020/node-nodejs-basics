import fs, { promises as fsPromises } from 'fs';

const read = async () => {
    const fPath = './files/fileToRead.txt';
    if (fs.existsSync(fPath)) {
      fsPromises.readFile(fPath).then(f => {
          console.log(f.toString());
      });
    } else {
      throw new Error('FS operation failed');
    }
};

await read();