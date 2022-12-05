import { Worker } from 'worker_threads';
import os from 'os';
const performCalculations = async () => {
    return new Promise((resolve, reject) => {
        const results = [];
        const systemCpuNumber = os.cpus().length;
        for (let i = 0; i < systemCpuNumber; i++) {
            const sourceNum = 10 + i;
            
            const worker = new Worker("./worker.js", { workerData: { sourceNum }});
            worker.on("message", result => {
            results.push({ status: 'resolved', data: result });
            });
            
            worker.on("error", () => {
                results.push({ status: 'error', data: null });
            });

            worker.on("exit", () => {
                if (i === systemCpuNumber - 1) resolve(results);
            });
        }  
    });
};


console.log(await performCalculations());
