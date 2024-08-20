import express from 'express';
import path from 'path';
import {fileURLToPath } from 'url'; //Corrigir caminho

//Correção dos caminhos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Rota para utilizar classe HtmlBootstrap.js
router.get('/HtmlBootstrap.js', (req, res) => {res.sendFile(path.join(__dirname, '..','util', 'HtmlBootstrap.js'));});
// Rota para utilizar classe Util.js
router.get('/Util.js', (req, res) => {res.sendFile(path.join(__dirname, '..', 'util', 'Util.js'));});

export default router;