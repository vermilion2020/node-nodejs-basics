import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const fPath = `${__dirname}/files/fileToCompress.txt`;
    const archivedFPath = `${__dirname}/files/archive.gz`;
    const gzip = zlib.createGzip();
    const rStream = fs.createReadStream(fPath);
    const wStream = fs.createWriteStream(archivedFPath);
    rStream.pipe(gzip).pipe(wStream);
};

await compress();