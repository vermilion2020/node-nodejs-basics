import { createHash } from 'crypto';
import { promises as fsPromises} from 'fs';
import path from 'path';
import { getDirname } from '../helper.js';

const calculateHash = async () => {
  const __dirname = getDirname(import.meta.url);

  const str = await fsPromises.readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'), 'utf-8');
  const hash = createHash('sha256')
    .update(str)
    .digest('hex');
  process.stdout.write(hash);
  process.stdout.write('\n');
};

await calculateHash();