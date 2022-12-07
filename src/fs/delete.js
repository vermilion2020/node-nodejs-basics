import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const fPath = `${__dirname}/files/fileToRemove.txt`;
    if (fs.existsSync(fPath)) {
      await fsPromises.unlink(fPath);
    } else {
      throw new Error('FS operation failed');
    } 
};

await remove();