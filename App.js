import express from 'express'; // Servidor Node
import path from 'path'; //Pegar caminho de arquivo
import fs from 'fs'; //Leitura de Arquivo
import {fileURLToPath } from 'url'; //Corrigir caminho
import curriculoRoute from './server/route/CurriculoRoute.js'; // Rota de Curriculo
import fonteRoute from './server/route/FonteRoute.js'; // Rota da Configuração da Fonte
import Util from './server/util/Util.js'; // Para tratar o arquivo PEM do SSL
import https from 'https'; // Módulo HTTPS do Node.js
import http from 'http'; // Módulo HTTP do Node.js

const link = {
    PRODUCAO: "brunosmacario.com.br",
    LOCAL: "localhost"
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); //Iniciar servidor
const PORT_HTTP = process.env.PORT_HTTP || 80; // Porta HTTP
const PORT_HTTPS = process.env.PORT_HTTPS || 443; // Porta HTTPS
const HOST = process.env.HOST || link.LOCAL; // O host do servidor

const credentials = Util.lerArquivoPEM(fs,'./server/ssl/brunosmacario.com.br.pem'); // Arquivo PEM SSL

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));
// Middleware para servir arquivos estáticos da pasta 'server'
app.use(express.static(path.join(__dirname, 'server')));

// Rota principal para servir o arquivo index.html da pasta 'public'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint para acessar o arquivo fonte-config.json
app.get('/server/data/fonte', (req, res) => {
  const filePath = path.join(__dirname, 'server', 'data', 'fonte-config.json');
  
  // Verifica se o arquivo existe
  fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
          console.error('Arquivo não encontrado:', filePath);
          res.status(404).send('Arquivo não encontrado.');
      }

      // Lê o arquivo e envia como resposta
      fs.readFile(filePath, 'utf8', (err, data) => {
          res.status(200).json(JSON.parse(data));
      });
  });
});

// Outros middlewares e rotas do seu aplicativo Express

//para ser usada uma classe do 'server' no 'public' é preciso colocar uma rota
app.get('/util/Util.js', (req, res) => {res.sendFile(path.join(__dirname, 'server', 'util', 'Util.js'));});
app.get('/util/HtmlBootstrap.js', (req, res) => {res.sendFile(path.join(__dirname, 'server', 'util', 'HtmlBootstrap.js'));});


// Curriculo
app.use('/api', curriculoRoute);
app.get('/page/curriculo', (req, res) => {res.sendFile(path.join(__dirname, 'server', 'view', 'CurriculoView.js'));});

// Configuração da Fonte
app.use('/api', fonteRoute);

// Servidor HTTP
const httpServer = http.createServer(app);
httpServer.listen(PORT_HTTP, () => {
    console.log(`Servidor Express HTTP iniciado na porta ${PORT_HTTP}`);
    console.log(`Servidor rodando em: http://${HOST}:${PORT_HTTP}`);
});

// Servidor HTTPS
if (credentials) {
    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen(PORT_HTTPS, () => {
        console.log(`Servidor Express HTTPS iniciado na porta ${PORT_HTTPS}`);
        console.log(`Servidor rodando em: https://${HOST}:${PORT_HTTPS}`);
    });
} else {
    console.log('Certificado SSL inválido ou não encontrado. Servidor HTTPS não iniciado.');
}



