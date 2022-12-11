import * as fs from 'fs';
import path from 'path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const readable = fs.createReadStream(`${__dirname}/files/fileToRead.txt`, {encoding: 'utf8'});
    for await (const chunk of readable) {
        process.stdout.write(chunk);
        process.stdout.write('\n');
    }
};

await read();