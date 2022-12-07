import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const fPath = `${__dirname}/files`;
    const fCopyPath = `${__dirname}/files_copy`;
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