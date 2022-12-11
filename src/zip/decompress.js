import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const fPath = `${__dirname}/files/fileToCompress.txt`;
    const archivedFPath = `${__dirname}/files/archive.gz`;
    const upzip = zlib.createUnzip();
    const rStream = fs.createReadStream(archivedFPath);
    const wStream = fs.createWriteStream(fPath);
    rStream.pipe(upzip).pipe(wStream);
};

await decompress();