import express from 'express';
import path from 'path';
import {fileURLToPath } from 'url'; //Corrigir caminho

//Correção dos caminhos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

//Curriculo Principal
router.get('/curriculo', (req, res) => {res.sendFile(path.join(__dirname, '..', 'view', 'CurriculoView.js'));});
//Formulário
router.get('/curriculo/form', (req, res) => {res.sendFile(path.join(__dirname, '..', 'view', 'CurriculoFormView.js'));});

export default router;