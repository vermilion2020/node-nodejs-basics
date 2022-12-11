import { fork } from 'child_process';
import path from 'path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const spawnChildProcess = async (args) => {
    const fPath = `${__dirname}/files/script.js`;
    const cProcess = fork(fPath, args.splice(0, 2), { silent: true });
    process.stdout.write('Enter your message\n');
    process.stdin.pipe(cProcess.stdin);
    cProcess.stdout.pipe(process.stdout);
    cProcess.stdout.on('data', data => {
        const msg = `Received from child process: ${data}`;
        process.stdout.write(msg);
    });
};

spawnChildProcess(process.argv);