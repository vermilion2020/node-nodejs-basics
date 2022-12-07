import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const oldName = `${__dirname}/files/wrongFilename.txt`;
    const newName = `${__dirname}/files/properFilename.md`;
    if (fs.existsSync(oldName) && !fs.existsSync(newName)) {
      await fsPromises.rename(oldName, newName);
    } else {
      throw new Error('FS operation failed');
    }
};

await rename();