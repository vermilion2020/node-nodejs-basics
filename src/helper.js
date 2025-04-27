import path from 'path';
import { fileURLToPath } from 'url';

export const getDirname = (url) => {
    const __filename = fileURLToPath(url);
    return path.dirname(__filename);
}

export const FS_ERROR_MESSAGE = 'FS operation failed';