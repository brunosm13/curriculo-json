# `/server/controller`

## `CurriculoController`

Este controlador `CurriculoController` gerencia as requisições relacionadas ao currículo, utilizando serviços fornecidos pelo `CurriculoService`.

<details>

### Métodos

#### `async carregarDados(req, res)`

Carrega os dados do currículo através do serviço `CurriculoService` e responde com os dados obtidos.

##### Parâmetros

- `req` (object): Objeto de requisição.
- `res` (object): Objeto de resposta.

##### Exemplo de Uso

```javascript
import CurriculoController from '../server/controller/CurriculoController';

const controller = new CurriculoController();

// Exemplo de chamada do método carregarDados
controller.carregarDados(req, res);
```
### Instalação

Certifique-se de que a classe `CurriculoController` está exportada corretamente no seu arquivo e importada onde necessário.

```javascript
// No arquivo CurriculoController.js
export default CurriculoController;

// Exemplo de importação em outro arquivo
import CurriculoController from '../server/controller/CurriculoController';
```
</details>

## `FonteController`

Este controlador `FonteController` é responsável por lidar com as requisições relacionadas ao carregamento de dados de fontes para a aplicação.

<details>

### Métodos

#### `async carregarDados(req, res)`

Método assíncrono que lida com a requisição para carregar dados de fontes.

##### Parâmetros

- `req` (object): Objeto de requisição HTTP.
- `res` (object): Objeto de resposta HTTP.

##### Comportamento

- Utiliza a instância de `FonteService` para carregar os dados.
- Retorna os dados de fontes em formato JSON com status 200 se bem-sucedido.
- Retorna status 500 com mensagem de erro se houver algum problema durante o carregamento dos dados.

##### Exemplo de Uso

```javascript
import FonteController from '../server/controller/FonteController';

// Exemplo de utilização do método carregarDados
const controller = new FonteController();
controller.carregarDados(req, res);
```
### Instalação

Certifique-se de que a classe `FonteController` está exportada corretamente no seu arquivo e importada onde necessário.

```javascript
// No arquivo FonteController.js
export default FonteController;

// Exemplo de importação em outro arquivo
import FonteController from '../server/controller/FonteController';
```
