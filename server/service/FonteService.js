import fs from 'fs';
import path from 'path';

class FonteService {
    constructor() {
        this.filePath = path.join(process.cwd(), 'server', 'data', 'fonte-config.json');
    }

    carregarDados() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filePath, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    try {
                        const parsedData = JSON.parse(data);
                        resolve(parsedData);
                    } catch (error) {
                        reject(error);
                    }
                }
            });
        });
    }
}

export default FonteService;
