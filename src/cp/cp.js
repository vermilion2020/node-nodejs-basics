import { spawn } from 'child_process';
import path from 'path';
import { getDirname } from '../helper.js';

const spawnChildProcess = async (args) => {
  const __dirname = getDirname(import.meta.url);
  const cp = spawn('node', [path.join(__dirname, 'files', 'script.js'), ...args]);

  cp.stdout.on('data', (data) => {
    process.stdout.write(data.toString());
  });

  process.stdin.on('data', (data) => {
    cp.stdin.write(data);
  })
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--arg1', '--arg2']);
