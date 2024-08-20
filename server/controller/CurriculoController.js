import CurriculoService from '../service/CurriculoService.js';

class CurriculoController {
    async carregarDados(req, res) {
        try {
            const curriculoService = new CurriculoService();
            const dados = await curriculoService.carregarDados();
            res.status(200).json(dados);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async validarDados(req, res) {
        try {
             // Passa os dados do corpo da requisição para o serviço
            const curriculoService = new CurriculoService(req.body);
            const erros = curriculoService.validarDados();

            res.status(200).json(erros);
        } catch (error) {
            res.status(500).send(error.message);
            throw error;
        }
    }

    async validarDado(req, res) {
        try {
             // Passa os dados do corpo da requisição para o serviço
            const curriculoService = new CurriculoService();
            const erros = curriculoService.validarDado(req.body.valor, req.body.campo);

            res.status(200).json(erros);
        } catch (error) {
            res.status(500).send(error.message);
            throw error;
        }
    }
}

export default CurriculoController;
