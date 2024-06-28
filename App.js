const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8080; // Define a porta onde o servidor irá escutar

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
          return;
      }

      // Lê o arquivo e envia como resposta
      fs.readFile(filePath, 'utf8', (err, data) => {
          return res.json(JSON.parse(data));
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
          return;
      }

      // Lê o arquivo e envia como resposta
      fs.readFile(filePath, 'utf8', (err, data) => {
          return res.json(JSON.parse(data));
      });
  });
});

// Outros middlewares e rotas do seu aplicativo Express

// Inicia o servidor e escuta na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado na porta ${PORT}`);
});
