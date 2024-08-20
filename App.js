import express from 'express'; // Servidor Node
import path from 'path'; //Pegar caminho de arquivo
import fs from 'fs'; //Leitura de Arquivo
import {fileURLToPath } from 'url'; //Corrigir caminho

//Rotas
import curriculoRoute from './server/route/CurriculoRoute.js'; // Rota de Curriculo
import fonteRoute from './server/route/FonteRoute.js'; // Rota da Configuração da Fonte
import utilRoute from './server/route/UtilRoute.js'; // Rota dos Utilitários
import viewRoute from './server/route/ViewRoute.js'; // Rota das Views

// Para tratar o arquivo PEM do SSL
import Util from './server/util/Util.js'; 

import https from 'https'; // Módulo HTTPS do Node.js
// import http from 'http'; // Módulo HTTP do Node.js

// configura o arquivo .env para ser lido
import dotenv from 'dotenv';
dotenv.config();

//Correção dos caminhos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Iniciar servidor
const app = express(); 

// Arquivo PEM SSL
const credentials = Util.lerArquivoPEM(fs,process.env.PEM_PATH); 

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));
// Middleware para parsing de JSON
app.use(express.json());

// Rota principal para servir o arquivo index.html da pasta 'public'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Rota para servir o arquivo curriculoform.html da pasta 'public'
app.get('/page/curriculo/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'curriculoform.html'));
});

// Outros middlewares e rotas do seu aplicativo Express

// --- ROTAS PADRÕES----
// Dados do Curriculo
app.use('/api', curriculoRoute);
// Dados da Configuração da Fonte
app.use('/api', fonteRoute);
//Utilitários necessários para configurar as páginas
app.use('/util', utilRoute);
//Views
app.use('/view', viewRoute);

// --------------------------------------------
// Como o servidor do KingHost não funciona com o 443 e 80, então será usado só o https
// com porta 21124 mesmo.
// Servidor HTTP
//const httpServer = http.createServer(app);
//httpServer.listen(PORT_HTTP, () => {
//    console.log(`Servidor Express HTTP iniciado na porta ${PORT_HTTP}`);
//    console.log(`Servidor rodando em: http://${HOST}:${PORT_HTTP}`);
//});
//-----------------------------------------------

// Servidor HTTPS
if (credentials) {
    // inicia servidor HTTPS utilizando o certificado PEM na pasta serve/ssl
    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen(process.env.PORT_HTTPS, () => {
        console.log(`Servidor Express HTTPS iniciado na porta ${process.env.PORT_HTTPS}`);
        console.log(`Servidor rodando em: https://${process.env.HOST}:${process.env.PORT_HTTPS}`);
    });
} else {
    console.log('Certificado SSL inválido ou não encontrado. Servidor HTTPS não iniciado.');
}