import express from 'express';
import FonteController from '../controller/FonteController.js'; // Caminho corrigido

const router = express.Router();
const fonteController = new FonteController();

router.get('/fonte', (req, res) => fonteController.carregarDados(req, res));

export default router;
