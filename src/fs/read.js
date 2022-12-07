import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const fPath = `${__dirname}/files/fileToRead.txt`;
    if (fs.existsSync(fPath)) {
      fsPromises.readFile(fPath).then(f => {
          console.log(f.toString());
      });
    } else {
      throw new Error('FS operation failed');
    }
};

await read();