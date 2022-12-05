import fs, { promises as fsPromises } from 'fs';

const create = async () => {
  const fPath = './files/fresh.txt';
  if (!fs.existsSync(fPath)) { 
    const content = 'I am fresh and young';
    await fsPromises.writeFile(fPath, content);
  } else {
    throw new Error('FS operation failed');
  }
};

await create();