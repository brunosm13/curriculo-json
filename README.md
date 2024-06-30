# Currículo Online

Este é um projeto para exibir um currículo online utilizando Node.js, HTML e Bootstrap. Ele carrega dados dinamicamente a partir de arquivos JSON para construir a página de currículo.

## Bibliotecas
- **Dados:** JSON
- **Frontend:** HTML5
- **Frontend:** Bootstrap v4.1.3
- **Backend:** Javascript
- **Backend:** Node.js v20.15.0 (LTS)
- **Backend:** Express v5.0

## Estrutura do Projeto

O projeto está organizado da seguinte maneira:

- **public:** Contém todos os arquivos relacionados ao frontend, incluindo HTML, CSS e JavaScript.

- **server:** Contém todos os arquivos relacionados ao backend, incluindo a lógica de negócios e acesso aos dados (DAO e SAO).

## Objetivo do Projeto
Facilitar a vida de trabalhadores na geração de currículo com um formato padronizado onde o foco seja simplicidade e objetividade.

## Como Usar

1. **Instale o Node.js:**
   - Certifique-se de ter o Node.js instalado em seu computador. Você pode baixá-lo e instalá-lo a partir do [site oficial do Node.js](https://nodejs.org/).

2. **Clone o repositório:**
   - Clone o repositório do GitHub localmente para o seu computador. Você pode fazer isso usando o comando `git clone` no seu terminal:

     ```
     git clone https://github.com/brunosm13/curriculo-json.git
     ```

3. **Instale as dependências:**
   - Navegue até o diretório do projeto clonado e instale as dependências do Node.js usando npm (ou yarn se preferir):

     ```
     cd curriculo-json
     npm install
     ```
   - Instale também o serviço do express utilizado no App.js:
     ```
     npm install express
     ```

4. **Executar o servidor:**
   - Após instalar as dependências, execute o servidor Node.js Express. O arquivo principal está na pasta raiz, então você pode iniciar o servidor assim:
     ```
     node App.js
     ```

5. **Visualize o currículo:**
   - Abra um navegador da web e vá para `http://localhost:3030` para visualizar a página do currículo.
---


