# classe Util

Esta classe `Util` fornece métodos utilitários para conversão de datas no formato brasileiro e cálculo de idade.

## Métodos

### `static converteDataBR(dataTexto)`

Converte uma data no formato brasileiro (dd/mm/yyyy) para um objeto `Date` do JavaScript.

#### Parâmetros

- `dataTexto` (string): A data no formato "dd/mm/yyyy".

#### Retorno

- `Date`: Um objeto `Date` correspondente.


#### Exemplo de Uso

```javascript
import Util from './Util';

const data = Util.converteDataBR('30/06/2024');
console.log(data); // Saída: Sun Jun 30 2024 00:00:00 GMT-0300 (Horário Padrão de Brasília)
```

### `static calcularIdade(dataNascimento)`

Calcula a idade com base na data de nascimento fornecida.

#### Parâmetros

- `dataNascimento` (Date): Um objeto `Date` representando a data de nascimento.

#### Retorno

- `number`: A idade calculada.

#### Exemplo de Uso

```javascript
import Util from './Util';

const dataNascimento = Util.converteDataBR('15/04/1990');
const idade = Util.calcularIdade(dataNascimento);
console.log(idade); // Saída: A idade calculada com base na data atual
```
## Notas

- O método `converteDataBR` assume que o formato da data de entrada é sempre "dd/mm/yyyy".
- O método `calcularIdade` leva em consideração as diferenças de meses e dias ao calcular a idade.

## Instalação

Certifique-se de que a classe `Util` está exportada corretamente no seu arquivo e importada onde necessário.

```javascript
// No arquivo Util.js
export default Util;

// No arquivo onde você deseja usar a classe Util
import Util from './caminho/para/Util';
```
# HtmlBootstrap

Esta classe `HtmlBootstrap` facilita a criação de elementos HTML com classes do Bootstrap.

## Métodos

### `static criarElemento(tag, classes=null, texto=null, link=null, title=null, dataToggle=null, style=null)`

Cria um elemento HTML de acordo com os parâmetros fornecidos.

#### Parâmetros

- `tag` (string): A tag do elemento HTML (e.g., 'div', 'span').
- `classes` (string, opcional): Classes CSS a serem aplicadas ao elemento.
- `texto` (string, opcional): Texto a ser inserido no elemento.
- `link` (string, opcional): URL para elementos de link.
- `title` (string, opcional): Título do elemento.
- `dataToggle` (string, opcional): Atributo data-toggle.
- `style` (string, opcional): Estilos CSS a serem aplicados ao elemento.

#### Retorno

- `HTMLElement`: O elemento HTML criado.

#### Exemplo de Uso

```javascript
import HtmlBootstrap from './HtmlBootstrap';

const div = HtmlBootstrap.criarElemento('div', 'my-class', 'Hello World');
document.body.appendChild(div);
```
