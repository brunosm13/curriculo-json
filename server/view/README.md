# `/server/view`

## `CurriculoView`

A classe `CurriculoView` é responsável por gerenciar a visualização do currículo, incluindo a criação de elementos HTML e a inserção de dados dinâmicos na página. Esta classe é utilizada na pasta`public`, por isso foi configurada no `App.js` com s seguinte rota:

```javascript
// Rota configurada no App.js
app.get('/page/curriculo', (req, res) => {res.sendFile(path.join(__dirname, 'server', 'view', 'CurriculoView.js'));});
```
<details>

### Métodos

#### `constructor()`

O construtor inicializa a estrutura HTML da página de currículo, incluindo o cabeçalho, conteúdo principal e rodapé. Importante importar também a classe Util e HtmlBootstrap porque são utilizadas na construção das páginas.

##### Exemplo de Uso

```javascript
import CurriculoView from '/page/currículo';

// Classes necessárias importar para construção de página
import Util from '/util/Util.js';
import HtmlBootstrap from '/util/HtmlBootstrap.js'; 

const curriculoView = new CurriculoView();
```
### `carregarCurriculo(data)`

Carrega os dados do currículo no HTML da página.

#### Parâmetros

- `data` (object): Dados do currículo.

#### Exemplo de Uso

```javascript
import CurriculoView from '/page/currículo';
import Util from '/util/Util.js';
import HtmlBootstrap from '/util/HtmlBootstrap.js';

const curriculoView = new CurriculoView();

curriculoView.carregarCurriculo({
  atualizadoEm: '2023-12-31',
  nome: 'Bruno Silva Macário',
  titulo: 'Desenvolvedor',
  dataNascimento: '1990-01-01',
  estadoCivil: 'Solteiro',
  emailPessoal: 'bruno@example.com',
  linkedIn: 'https://www.linkedin.com/in/bruno',
  formacoes: [
    {
      instituto: 'Universidade X',
      area: 'Engenharia de Software',
      concluidoEm: '2015',
      TCC: 'Um estudo sobre Y',
      TCClink: 'http://linktcc.com'
    }
  ],
  experiencias: [
    {
      empresa: 'Empresa Z',
      cargo: 'Desenvolvedor',
      modalidade: 'Presencial',
      periodo: '2016-2020',
      atividades: 'Desenvolvimento de sistemas'
    }
  ],
  CursosTreinamentosCertificacoes: [
    {
      tipo: 'Curso',
      nome: 'Curso de JavaScript',
      link: 'http://linkcurso.com',
      onde: 'Online',
      quando: '2020'
    }
  ],
  InformacoesBasicas: [
    'Informação adicional'
  ],
  rodapeSite: 'Todos os direitos reservados'
});
```

### `alterarEstilo(dados)`

Altera o estilo dos elementos HTML com base nos dados fornecidos.

#### Parâmetros

- `dados` (object): Objeto contendo as configurações de estilo.

#### Exemplo de Uso

```javascript
import CurriculoView from '/page/currículo';
import Util from '/util/Util.js';
import HtmlBootstrap from '/util/HtmlBootstrap.js'; 

const curriculoView = new CurriculoView();

curriculoView.alterarEstilo({
  tituloSite: 'Alata',
  tituloSiteCor: 'text-primary',
  tituloPrincipal: 'Zilla Slab',
  tituloPrincipalCor: 'text-success',
  tituloSecundario: 'Arial',
  tituloSecundarioCor: 'text-danger',
  textoDestaque: 'Verdana',
  textoDestaqueCor: 'text-warning',
  textoPadrao: 'Roboto',
  textoPadraoCor: 'text-muted',
  textoPadraoLink: 'Arial',
  textoPadraoLinkCor: 'text-info'
});
```
### Instalação

Certifique-se de que a classe `CurriculoView` esteja corretamente importada e instanciada no seu arquivo JavaScript onde você deseja utilizar a visualização do currículo.

#### Exemplo de Importação

```javascript
// Importando a classe CurriculoView
import CurriculoView from '/page/currículo';

// Classes necessárias importar para construção de página
import Util from '/util/Util.js';
import HtmlBootstrap from '/util/HtmlBootstrap.js'; 

// Criando uma instância da CurriculoView
const curriculoView = new CurriculoView();
```
</details>
