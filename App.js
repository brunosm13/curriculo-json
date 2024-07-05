import express from 'express'; // Servidor Node
import path from 'path'; //Pegar caminho de arquivo
import fs from 'fs'; //Leitura de Arquivo
import {fileURLToPath } from 'url'; //Corrigir caminho
import curriculoRoute from './server/route/CurriculoRoute.js'; // Rota de Curriculo
import fonteRoute from './server/route/FonteRoute.js'; // Rota da Configuração da Fonte

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); //Iniciar servidor
const PORT = process.env.PORT || 21124; // A porta onde o servidor irá escutar
const HOST = process.env.HOST || 'brunosmacario.com.br'; // O host do servidor

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

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
          res.status(202).json(JSON.parse(data));
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

// Inicia o servidor e escuta na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado na porta ${PORT}`);
  console.log(`Servidor rodando em: ${HOST}:${PORT}`)
});



