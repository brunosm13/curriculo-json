# `/server/service`
## `CurriculoService`

Esta classe `CurriculoService` oferece métodos para carregar dados do arquivo JSON do currículo.

<details>

### Descrição

O `CurriculoService` é responsável por carregar os dados do currículo a partir de um arquivo JSON localizado em `server/data/curriculo.json`.

### Métodos

#### `carregarDados()`

Carrega os dados do arquivo JSON do currículo.

##### Retorno

- `Promise`: Um objeto que retorna os dados do currículo.

##### Exemplo de Uso

```javascript
import CurriculoService from '../server/service/CurriculoService.js';

const curriculoService = new CurriculoService();

try {
  const dados = await curriculoService.carregarDados();
  res.status(200).json(dados);
} catch (error) {
  res.status(500).send(error.message);
}
````

### Instalação

Certifique-se de que o `CurriculoService` está exportado corretamente no seu arquivo e importado onde necessário.

```javascript
// No arquivo CurriculoService.js
export default CurriculoService;

// Exemplo de importação em outro arquivo
import CurriculoService from '../server/service/CurriculoService.js';
````
</details>


## `FonteService`

Esta classe `FonteService` oferece métodos para carregar o estilo do currículo.

<details>

### Descrição

O `FonteService` é responsável por carregar o estilo do currículo a partir de um arquivo JSON localizado em `server/data/fonte-config.json`.

### Métodos

#### `carregarDados()`

Carrega os dados do arquivo JSON do estilo do currículo.

##### Retorno

- `Promise`: Um objeto que retorna os dados do estilo do currículo.

##### Exemplo de Uso

```javascript
import FonteService from '../server/service/FonteService.js';

const fonteService = new FonteService();

try {
  const dados = await fonteService.carregarDados();
  res.status(200).json(dados);
} catch (error) {
  res.status(500).send(error.message);
}
````

### Instalação

Certifique-se de que o `FonteService` está exportado corretamente no seu arquivo e importado onde necessário.

```javascript
// No arquivo FonteService.js
export default FonteService;

// Exemplo de importação em outro arquivo
import FonteService from '../server/service/FonteService.js';
````
</details>

