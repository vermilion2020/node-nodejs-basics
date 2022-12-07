import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const fPath = `${__dirname}/files`;
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