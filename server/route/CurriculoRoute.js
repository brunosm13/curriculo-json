import express from 'express';
import CurriculoController from '../controller/CurriculoController.js'; // Caminho corrigido

const router = express.Router();
const curriculoController = new CurriculoController();

router.get('/curriculo', (req, res) => curriculoController.carregarDados(req, res));

export default router;
