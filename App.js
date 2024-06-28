import express from 'express';
import path from 'path'; //Pegar caminho de arquivo
import fs from 'fs'; //Leitura de Arquivo
import Util from './server/util/Util.js'; //Classe de Utilidades
import {fileURLToPath } from 'url'; //Corrigir caminho

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express(); //Configuração de
const PORT = process.env.PORT || 3030; // Define a porta onde o servidor irá escutar

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

// Endpoint para acessar o arquivo curriculo.json
app.get('/server/data/curriculo', (req, res) => {
  const filePath = path.join(__dirname, 'server', 'data', 'curriculo.json');
  

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

app.get('/util', (req, res) => {
    res.sendFile(__dirname + '/server/util/Util.js');
  });

app.get('/html', (req, res) => {
    res.sendFile(__dirname + '/server/util/HtmlBootstrap.js');
  });

// Outros middlewares e rotas do seu aplicativo Express

// Inicia o servidor e escuta na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado na porta ${PORT}`);
});
