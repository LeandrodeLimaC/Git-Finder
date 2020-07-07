# GitFinder  - Code-challenge

[logo]: https://github.com/LeandrodeLimaC/gitfinder/raw/master/src/assets/logo.svg "GitFinder"

App baseado em  para buscar usuários do github através da a [API](developer.github.com/v3/) e retornar  seus repositórios com a quantidade de estrelas de cada um.

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

## Mantenha em mente
---
Para escalonar este sistema é uma boa opção

**Rotas** 

A utilização de [rotas](https://router.vuejs.org/guide/essentials/dynamic-matching.html "Explicação sobre Rotas") e views separadas possibilita a chamada da API mais direta e organizada, é possível recuperar informações passadas pela rota: ```javascript $route.params.name ``` e caso necessário é possível enviar [props](https://router.vuejs.org/guide/essentials/passing-props.html "Enviando props com routes").

Também há vantagens na usabilidade, como por exemplo caso o usuário deseja compartilhar o link de seu perfil ele poderá simplesmente enviar a URL.

Exemplo de uma url terminando com o nome do usuário ```www.gitfinder.com.br/users/leandrodelimac```

Mantenha-se atento com o [gerenciamento dos ciclos de vida](https://br.vuejs.org/v2/guide/instance.html#Diagrama-do-Ciclo-de-Vida) do Vue ao realizar chamadas para a API


**Vuex**

Gerenciamento e controles de estados e mutações de propriedades podem se tornar um problema caso  
