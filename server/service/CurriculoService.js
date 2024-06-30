import fs from 'fs';
import path from 'path';

class CurriculoService {
    constructor() {
        this.filePath = path.join(process.cwd(), 'server', 'data', 'curriculo.json');
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

export default CurriculoService;
