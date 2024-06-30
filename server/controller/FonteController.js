import FonteService from '../service/FonteService.js';
const fonteService = new FonteService();

class FonteController {
    async carregarDados(req, res) {
        try {
            const dados = await fonteService.carregarDados();
            res.status(200).json(dados);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

export default FonteController;
