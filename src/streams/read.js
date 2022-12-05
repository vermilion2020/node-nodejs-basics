import * as fs from 'fs';

const read = async () => {
    const readable = fs.createReadStream('./files/fileToRead.txt', {encoding: 'utf8'});
    for await (const chunk of readable) {
        process.stdout.write(chunk);
        process.stdout.write('\n');
    }
};

await read();