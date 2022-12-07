import { promises as fsPromises } from 'fs';
import { createHash } from 'node:crypto';
import path from 'path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const fPath = `${__dirname}/files/fileToCalculateHashFor.txt`;
    const content = await fsPromises.readFile(fPath)
    console.log(createHash('sha256').update(content).digest('hex'));
};

await calculateHash();