import { Transform, Writable } from 'stream';

const transform = async () => {
    const write = new Writable({
      write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
      }
    });

    const reverse = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, chunk.toString().split('').reverse().join(''));
        },
    });
    process.stdout.write('Enter your message\n');
    process.stdin.pipe(reverse).pipe(write);
};

await transform();