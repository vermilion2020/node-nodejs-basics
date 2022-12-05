import { promises as fsPromises } from 'fs';
import { createHash } from 'node:crypto'

const calculateHash = async () => {
    const fPath = './files/fileToCalculateHashFor.txt';
    const content = await fsPromises.readFile(fPath)
    console.log(createHash('sha256').update(content).digest('hex'));
};

await calculateHash();