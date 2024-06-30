# `/server/route`
## `CurriculoRouter`

Este arquivo define as rotas relacionadas ao currículo da aplicação usando Express.

<details>

### Rota `/curriculo`

- **Método HTTP:** GET
- **Controlador:** `CurriculoController`
- **Função:** `carregarDados`

##### Comportamento

- Utiliza o método `carregarDados` do `CurriculoController` para lidar com a requisição GET.
- Retorna os dados do currículo em formato JSON com status 200 se bem-sucedido.
- Retorna status 500 com mensagem de erro se houver algum problema durante o carregamento dos dados.

##### Exemplo de Uso

```javascript
import CurriculoRouter from '../server/route/CurriculoRouter.js';

// Exemplo de utilização da rota /curriculo
app.use('/api', CurriculoRouter);
```
### Instalação

Certifique-se de que o `CurriculoRouter` está exportado corretamente no seu arquivo e importado onde necessário.

```javascript
// No arquivo CurriculoRouter.js
export default CurriculoRouter;

// Exemplo de importação em outro arquivo
import CurriculoRouter from '../server/route/CurriculoRouter.js';
````
No arquivo principal `App.js`, a rota precisa estar importada e configurada:
```javascript
import CurriculoRouter from '../server/route/CurriculoRouter.js';

// Utilize o CurriculoRouter como middleware
app.use('/api', CurriculoRouter);
````
</details>

## `FonteRouter`

O `FonteRouter` gerencia as rotas relacionadas ao carregamento de dados de fontes para o projeto. Ele utiliza o `FonteController` para processar solicitações HTTP relacionadas a esses dados.

<details>
  
### Métodos

#### `GET /fonte`

- **Descrição:** Rota para carregar os dados das fontes.
- **Controller:** Utiliza o método `carregarDados` do `FonteController`.
- **Exemplo de Uso:**

```javascript
import express from 'express';
import FonteController from '../controller/FonteController.js';

const router = express.Router();
const fonteController = new FonteController();

router.get('/fonte', (req, res) => fonteController.carregarDados(req, res));

export default router;
```
### Instalação

Certifique-se de que o `FonteRouter` está exportado corretamente no seu arquivo e importado onde necessário.

```javascript
// No arquivo FonteRouter.js
export default FonteRouter;

// Exemplo de importação em outro arquivo
import CurriculoRouter from '../server/route/FonteRouter.js';
````
No arquivo principal `App.js`, a rota precisa estar importada e configurada:
```javascript
import FonteRouter from '../server/route/FonteRouter.js';

// Utilize o FonteRouter como middleware
app.use('/api', FonteRouter);
````
</details>

