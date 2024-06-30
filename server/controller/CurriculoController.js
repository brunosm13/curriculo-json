import CurriculoService from '../service/CurriculoService.js';

const curriculoDAO = new CurriculoService();

class CurriculoController {
    async carregarDados(req, res) {
        try {
            const dados = await curriculoDAO.carregarDados();
            res.status(200).json(dados);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

export default CurriculoController;
