# `public`

A pasta public é dedicada a todos os arquivos que serão servidos diretamente ao navegador do usuário. Isso inclui arquivos estáticos como HTML, CSS, JavaScript, imagens e fontes. Esses arquivos são responsáveis pela interface do usuário e interações do lado do cliente.Abaixo, você encontrará uma explicação resumida sobre a estrutura das pastas dentro do diretório `public`.

## Estrutura de Pastas

### `css`
A pasta `css` contém os arquivos de estilos CSS utilizados na aplicação. Estes arquivos definem o layout, cores, fontes e outros aspectos visuais da interface. A maioria dos arquivos aqui são parte do framework Bootstrap, que é usado para fornecer um design responsivo e componentes prontos para uso.

### `js`
A pasta `js` contém os arquivos JavaScript que implementam a lógica de front-end da aplicação. Esses arquivos são responsáveis por manipular o DOM, fazer requisições AJAX e interagir com o usuário. A maioria dos arquivos aqui são parte do framework Bootstrap, bem como outras bibliotecas de suporte.

### `img`
A pasta `img` armazena as imagens utilizadas na aplicação, como logos, ícones e outras imagens estáticas que são exibidas na interface do usuário.

### Arquivos HTML
Na raiz da pasta `public`, encontram-se os arquivos HTML que estruturam a interface do usuário. Estes arquivos são a base da página web e referenciam os arquivos CSS, JS e imagens para renderizar o conteúdo de forma adequada.

As classes da pasta `server` serão somente acessadas através das rotas configuradas no arquivo `App.js`. Por padrão, essas classes serão somente as classes de construção de página da pasta `view`, de controladores que acessam os dados da pasta `controller` e utilitárias da pasta `util`. Para utiliza-las basta importar da seguinte forma:

```javascript
    // Classes View
    import CurriculoView from '/page/curriculo/';
    // A view precisam ser iniciadas
	const curriculoView= new CurriculoView();  
    
    // Classes Utils
    // Não precisa ser iniciada por ser estática
    import Util from '/util/Util.js';
	import HtmlBootstrap from '/util/HtmlBootstrap.js'; 

    // Classes Controller 
    // Podem ser acessada sem ser importada através da Promise.
    // A função all da classe Promisse permite mais de uma chamada de dados.
    Promise.all([
        fetch('api/curriculo').then(response => response.json()))
    ])
    .then(([dados]) => {
        // Informar os tratamentos que serão efetuados
    })
    .catch(error => {
        console.error('Erro ao carregar os dados:', error);
    });
```
