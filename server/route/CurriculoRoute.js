import express from 'express';
import CurriculoController from '../controller/CurriculoController.js'; // Caminho corrigido

const router = express.Router();
const curriculoController = new CurriculoController();

router.get('/curriculo', (req, res) => curriculoController.carregarDados(req, res));
router.post('/curriculo/validar/todos', (req, res) => curriculoController.validarDados(req, res));
router.post('/curriculo/validar', (req, res) => curriculoController.validarDado(req, res));

export default router;