import zlib from 'zlib';
import fs from 'fs';

const compress = async () => {
    const fPath = './files/fileToCompress.txt';
    const archivedFPath = './files/archive.gz';
    const gzip = zlib.createGzip();
    const rStream = fs.createReadStream(fPath);
    const wStream = fs.createWriteStream(archivedFPath);
    rStream.pipe(gzip).pipe(wStream);
};

await compress();