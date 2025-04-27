import { Transform } from 'stream';
const transform = async () => {
  process.stdout.write('Enter the text to revert:\n');

  const transformStream = new Transform({ transform(ch, _, cb) {
    const revertedStr = ch.toString().split('').reverse().join('');
    this.push(revertedStr);
    this.push('\n');
    cb();
  }})

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();