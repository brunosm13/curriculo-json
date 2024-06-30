# Util

Esta classe `Util` fornece métodos utilitários para conversão de datas no formato brasileiro e cálculo de idade.
<details>

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
</details>

# HtmlBootstrap

Esta classe `HtmlBootstrap` facilita a criação de elementos HTML com classes do Bootstrap.

<details>

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
### `static criarElementoId(tag, id, classes=null, texto=null, link=null, title=null, dataToggle=null, style=null)`

Cria um elemento HTML com um ID específico.

#### Parâmetros

- `tag` (string): A tag do elemento HTML.
- `id` (string): O ID do elemento.
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
const divComId = HtmlBootstrap.criarElementoId('div', 'unique-id', 'my-class', 'Hello World');
document.body.appendChild(divComId);
```
### `static criarButton(id, classes, texto, funcao=null)`

Cria um botão do Bootstrap.

#### Parâmetros

- `id` (string): O ID do botão.
- `classes` (string): Classes CSS a serem aplicadas ao botão.
- `texto` (string): Texto do botão.
- `funcao` (string, opcional): Função específica a ser aplicada ao botão (e.g., 'imprimir').

#### Retorno

- `HTMLElement`: O botão criado.

#### Exemplo de Uso

```javascript
const button = HtmlBootstrap.criarButton('print-btn', 'btn-primary', 'Imprimir', HtmlBootstrap.funcao.imprimir);
document.body.appendChild(button);
```
### `static criarCard(classes=null)`

Cria um card do Bootstrap.

#### Parâmetros

- `classes` (string, opcional): Classes CSS a serem aplicadas ao card.

#### Retorno

- `HTMLElement`: O card criado.

#### Exemplo de Uso

```javascript
const card = HtmlBootstrap.criarCard('custom-card');
document.body.appendChild(card);
```
### `static criarCardBody(classes=null)`

Cria o corpo de um card do Bootstrap.

#### Parâmetros

- `classes` (string, opcional): Classes CSS a serem aplicadas ao corpo do card.

#### Retorno

- `HTMLElement`: O corpo do card criado.

#### Exemplo de Uso

```javascript
const cardBody = HtmlBootstrap.criarCardBody('custom-body');
document.body.appendChild(cardBody);
```
### `static criarCardTitle(texto, classes=null, id=null)`

Cria um título de card do Bootstrap.

#### Parâmetros

- `texto` (string): O texto do título.
- `classes` (string, opcional): Classes CSS a serem aplicadas ao título.
- `id` (string, opcional): O ID do título.

#### Retorno

- `HTMLElement`: O título do card criado.

#### Exemplo de Uso

```javascript
const cardTitle = HtmlBootstrap.criarCardTitle('Título do Card', 'custom-title', 'card-title-id');
document.body.appendChild(cardTitle);
```
### `static validarArgumento(argumento)`

Verifica se o argumento está vazio, nulo ou em branco.

#### Parâmetros

- `argumento` (any): O argumento a ser verificado.

#### Retorno

- `boolean`: `true` se o argumento for vazio, nulo ou em branco; caso contrário, `false`.

#### Exemplo de Uso

```javascript
const isEmpty = HtmlBootstrap.validarArgumento('');
console.log(isEmpty); // Saída: true

const isNotEmpty = HtmlBootstrap.validarArgumento('Hello');
console.log(isNotEmpty); // Saída: false
```
## Notas

- A classe `HtmlBootstrap` simplifica a criação de elementos HTML utilizando as classes do Bootstrap.
- Ela oferece métodos configuráveis para criar botões, cards e outros elementos estilizados de forma eficiente.
- Os métodos podem ser facilmente expandidos para adicionar novas funcionalidades conforme necessário.

## Instalação

Certifique-se de que a classe `HtmlBootstrap` está exportada corretamente no seu arquivo e importada onde necessário.

```javascript
// No arquivo HtmlBootstrap.js
export default HtmlBootstrap;

// Exemplo de importação em outro arquivo
import HtmlBootstrap from './caminho/para/HtmlBootstrap';
```
</details>
