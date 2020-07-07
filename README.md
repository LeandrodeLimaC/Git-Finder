# GitFinder  - Code-challenge

[logo]: https://github.com/LeandrodeLimaC/gitfinder/blob/master/src/assets/logo.png "GitFinder"

App baseado em  para buscar usuários do github através da a [API](developer.github.com/v3/) e retornar  seus repositórios com a quantidade de estrelas de cada um.

Testando a criação de um aplicativo enxuto sem rotas, aonde todo o controle é feito pelo App.vue através de estados, e mutações são comunicadas pelos filhos para seus pais 
diretamente - Teste prático para avaliar Prós e Contras 

## Requisitos
---
Para executar o projeto, será necessário instalar:

1. [Nodejs 12.x](https://nodejs.org/en/)


## Começando
---
Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub num diretório de sua preferência:

```shell
cd "diretorio de sua preferencia"
git clone https://github.com/LeandrodeLimaC/gitfinder
```
Navegue até a pasta criada e execute o seguinte comando para instalar as dependências do projeto
```
npm install
```

Por fim, inicie o servidor de desenvolvimento através do seguinte comando
```
npm run serve
```
## Estrutura de pastas
---
```
+-- public
|   -- favicon.ico              
|   -- index.html               
|
+-- src
|   |-- assets
|   |   -- logo.png             
|   |
|   +-- components
|   |   +-- reposList.vue     // Loop do array de repositórios, criação dos itens e gerenciamento de estados 
|   |   +-- searchBar.vue     // Barra de pesquisa, recebe e emite o valor digitado após receber um debounce (veja o helpers) 
|   |   +-- usersList.vue     // Criação dos itens da lista de usuário/Gerenciamento de estados/Emite usuário selecionado
|   |
|   +-- helpers
|   |   +-- debounce.js       // Recebe uma função e um delay/aplica os argumentos na função/e devolve a resolução da função 
|   |
|   +-- services
|   |   +-- config.js         // Arquivo de configuração do Axios/ Base url para a API
|   |   +-- users.js          // Serviços de requisição para rotas de usuários
|   |
|   +-- App.vue               // Gerencia chamadas para a API, armazena estados e organiza logicamente a composição do layout
|   +-- main.js               // Render da aplicação / importação e definição de componentes do material
|   +-- styles.scss           // Arquivo de configurações globais do Vue Material
|
+-- .gitignore
+-- babel.config.js
+-- package.json
+-- package-lock.json
+-- README.md
```

## Mantenha em mente
---
Para escalonar este sistema é uma boa opção

**Rotas** 

A utilização de [rotas](https://router.vuejs.org/guide/essentials/dynamic-matching.html "Explicação sobre Rotas") e views separadas possibilita a chamada da API mais direta e organizada, é possível recuperar informações passadas pela rota: ```javascript $route.params.name ``` e caso necessário é possível enviar [props](https://router.vuejs.org/guide/essentials/passing-props.html "Enviando props com routes").

Também há vantagens na usabilidade, como por exemplo caso o usuário deseja compartilhar o link de seu perfil ele poderá simplesmente enviar a URL.

Exemplo de uma url terminando com o nome do usuário ```www.gitfinder.com.br/users/leandrodelimac```

Mantenha-se atento com o [gerenciamento dos ciclos de vida](https://br.vuejs.org/v2/guide/instance.html#Diagrama-do-Ciclo-de-Vida) do Vue ao realizar chamadas para a API


**Vuex** <https://vuex.vuejs.org>

Pacote de gere
Gerenciamento e controles de [estados e mutações](https://vuex.vuejs.org/guide/mutations.html "Mutações no Vuex") de propriedades podem ser compartilhadas (alem da possibilidade de adição de regras) através da aplicação com mais facilidade, de modo que a fonte de determinada informação ficará mais clara e estruturada
