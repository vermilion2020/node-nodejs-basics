import zlib from 'zlib';
import fs from 'fs';

const decompress = async () => {
    const fPath = './files/fileToCompress.txt';
    const archivedFPath = './files/archive.gz';
    const upzip = zlib.createUnzip();
    const rStream = fs.createReadStream(archivedFPath);
    const wStream = fs.createWriteStream(fPath);
    rStream.pipe(upzip).pipe(wStream);
};

await decompress();