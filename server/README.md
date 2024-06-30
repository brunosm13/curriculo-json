# Server

A pasta server é onde reside a lógica do servidor. Aqui, colocamos a lógica de negócios, controle de rotas, interações com os dados (DAO) e serviços de aplicação (SAO). Separar o backend do frontend ajuda a manter o código organizado e facilita a manutenção e a escalabilidade do projeto. Abaixo, você encontrará uma explicação resumida sobre a estrutura das pastas dentro do diretório `server`.

## Estrutura de Pastas

### `data`
Esta pasta é responsável pelo armazenamento de dados. Aqui estão incluídos os arquivos JSON que contêm as informações utilizadas pelo sistema, como o currículo e a configuração de fontes.

### `util`
Esta pasta contém utilitários e funções auxiliares que são utilizadas em várias partes do projeto. Geralmente, são funções de apoio que realizam tarefas comuns e repetitivas.

### `route`
Nesta pasta estão definidas as rotas do aplicativo. As rotas determinam como as solicitações HTTP são tratadas e encaminhadas para os controladores adequados.

### `view`
Aqui estão os arquivos de visualização (views) que definem a estrutura e apresentação dos dados para o usuário. As views são responsáveis por renderizar o conteúdo que será exibido no front-end.

### `service`
Esta pasta contém os serviços que encapsulam a lógica de negócios. Os serviços são responsáveis por manipular dados e implementar a lógica principal do aplicativo.

### `controller`
Os controladores estão localizados nesta pasta. Eles recebem as solicitações das rotas, interagem com os serviços para processar os dados e retornam a resposta adequada ao cliente.
