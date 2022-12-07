import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const fPath = `${__dirname}/files/fresh.txt`;
  if (!fs.existsSync(fPath)) { 
    const content = 'I am fresh and young';
    await fsPromises.writeFile(fPath, content);
  } else {
    throw new Error('FS operation failed');
  }
};

await create();