<h1 align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" height="60" width="65" alt="Nest Logo" /> Record Management System</h1>

<p align="center">
    <img src="https://img.shields.io/static/v1?label=DioenD&message=JS&color=d2cca1&labelColor=757780" alt="DioenD">
    <img src="https://img.shields.io/static/v1?label=Faculdade Senac Pelotas&message=4º&color=fdca40&labelColor=000000" alt="Faculdade Senac Pelotas">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/DioenDJS/Record-Management-System" >
</p>

## Tecnologias Utilizadas no projeto :construction:

- [Node.js](https://nodejs.org/en/) <img align="center" alt="img nodejs" height="20" width="25" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" style="max-width:100%;" />
- [typescript](https://www.typescriptlang.org/) <img align="center" alt="img typescript" height="20" width="25" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" style="max-width:100%;" />
- [Docker](https://www.docker.com/get-started) <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" height="20" width="25" alt="Nest Logo" />
- [nestjs](https://nestjs.com/) <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" height="20" width="25" alt="Nest Logo" />
- [TYPEORM](https://typeorm.io/#/) <img src="https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png" height="20" width="45" alt="Nest Logo" />
- [Nestjs-Query](https://doug-martin.github.io/nestjs-query/) <img src="https://doug-martin.github.io/nestjs-query/img/logo.svg" height="20" width="45" alt="Nest Logo" />



## Projeto :computer:


## Trabalho final de Engenharia de Software III - Nest + GraphQL + TypeORM + NestJS-Query
Nesta atividade você será desafiado a entender e utilizar novas tecnologias para resolver um problema proposto.

## O problema

Desenvolva um projeto e a **documentação (Insomnia)** utilizando as tecnologias propostas que atendam aos seguintes requisitos.

### **História de Usuário #1 - Gerenciar colaboradores**

**Como** usuário do sistema

**quero** cadastrar colaboradores com nome e cpf.

**Critérios de aceitação**

- [x]  A listagem de colaboradores deve estar paginada
- [x]  Deve ser possível filtrar colaboradores por nome
- [x]  Deve ser possível ordenar os colaboradores por nome e data de cadastro
- [x]  Deve ser possível atualizar os dados de um colaborador
- [x]  A exclusão de colaboradores deve aplicar um delete lógico (soft delete) do registro.
- [Exemplo no MR](https://github.com/DioenDJS/Record-Management-System/pull/7)
### **História de Usuário #2 - Gerenciar Tarefas**

**Como** usuário do sistema

**quero** cadastrar tarefas com nome, data prevista de entrega, data de entrega e status (aberta, em progresso, finalizada) e **um** responsável (colaborador).

### Critérios de aceitação

- [x]  A listagem de tarefas deve estar paginada
- [x]  Filtragem por campos deve ser possível
- [x]  A exclusão de uma tarefa deve ser física (hard delete)
- [x]  Deve ser possível ordenar as tarefas por data prevista de entrega
- [x]  Ao cadastrar uma tarefa já deve ser especificado o colaborador responsável
- [x]  Deve ser possível ver todas as tarefas de um colaborador específico
- [x]  Deve ser possível atualizar os dados de uma tarefa
- [Exemplo no MR](https://github.com/DioenDJS/Record-Management-System/pull/9)

### **História de Usuário #3 - Gerenciar Serviços**

**Como** usuário do sistema

**quero** cadastrar serviços com nome, data prevista de entrega e com zero ou muitas tarefas.

### Critérios de aceitação

- [x]  A listagem de serviços deve estar paginada
- [x]  Filtragem por campos deve ser possível
- [x]  Quando excluir um serviço todas as tarefas vinculadas a ele também devem ser excluídas (hard delete para ambos)
- [x]  Deve ser possível ordenar as serviços por data prevista de entrega
- [x]  Deve ser possível visualizar um serviço em específico
- [x]  Deve ser possível visualizar todas as tarefas de um serviço selecionado
- [x]  Deve ser possível atualizar os dados de um serviço
- [Exemplo no MR](https://github.com/DioenDJS/Record-Management-System/pull/11)
## Como executar :gear:

- Clone o repositório `https://github.com/DioenDJS/Record-Management-System.git`.
- Install as dependências com o comando `npm install`.
- Rode o docker  `docker-compose up` para subir a imagem do postgres.
- Rode o projeto `npm run start:dev` para iniciar a aplicação.
- Ao final a aplicação estará disponível em `http://localhost:3000/graphql`.


> como foi instalado e configurado o projeto
<!-- 
> [Notion](https://www.notion.so/Project-NestJS-1df0f4eaa70646a1a99a8ec95fb76aef) <img align="center" alt="img notion" height="20" width="25" src="https://raw.githubusercontent.com/DioenDJS/ESIII---TypeScript-Node-e-Express-/main/assets/notion.png" style="max-width:100%;" />  -->
<!-- 
 
## Insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=ESIII&uri=https%3A%2F%2Fraw.githubusercontent.com%2FDioenDJS%2FESIII---TypeScript-Node-e-Express-%2Fmain%2Fassets%2FInsomnia_2021-09-18.json)
## Criação Product
<img align="center" alt="img criação"  src="assets/criar.png" />


## Lista Product
<img align="center" alt="img listar"  src="assets/listar.png" />


## Delete Product
<img align="center" alt="img listar"  src="assets/delete.png" />


## Criação Client
<img align="center" alt="img criação"  src="assets/criarclient.png" />


## Lista Clients
<img align="center" alt="img criação"  src="assets/listaclient.png" />


## Lista Client id
<img align="center" alt="img criação"  src="assets/listaIdClient.png" />


## Atualiza Client 
<img align="center" alt="img criação"  src="assets/AtualizaClient.png" />


## Delete Client
<img align="center" alt="img criação"  src="assets/deleteClient.png" /> --> 

 Dependências do Projetos :card_index_dividers:

> - nest new project-name
>
> ```nest new record-management-system```

> - dependencies
>
> ```npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata```

> - GraphQL
>
> ```npm i @nestjs/graphql graphql@^15 apollo-server-express```

> - TYPEORM
>
> ```npm install --save @nestjs/typeorm typeorm pg```

> - @nestjs/config
>
> ```npm i --save @nestjs/config```

> - @nestjs-query/core
>
>```npm i @nestjs-query/core @nestjs/common class-transformer```

> - @nestjs-query/query-graphql
>
>```npm i @nestjs-query/query-graphql @nestjs/common @nestjs/graphql graphql graphql-subscriptions class-transformer class-validator dataloader```

> - @nestjs-query/query-typeorm
>
>```npm i @nestjs-query/query-typeorm @nestjs/common @nestjs/typeorm class-transformer typeorm```
<!-- 
> - ts-node-dev 
>
>```npm i ts-node-dev -D``` -->

<!-- # Docker: <img align="center" alt="img notion" height="60" width="65" src="assets/docker.png" style="max-width:100%;" />

> como foi instalado e configurado o ``docker`` neste projeto

- [Notion](https://www.notion.so/Docker-2e9af245cb3f4cdda13adbb027311ace) <img align="center" alt="img notion" height="20" width="25" src="assets/notion.png" style="max-width:100%;" />



# TYPEORM: <img align="center" alt="img notion" height="60" width="85" src="assets/typeorm.png" style="max-width:100%;" />

> como foi instalado e configurado o ``TYPEORM`` neste projeto

- [Notion](https://www.notion.so/TYPEORM-3be2ed36d855431db3ba43a6c0a35848) <img align="center" alt="img notion" height="20" width="25" src="assets/notion.png" style="max-width:100%;" />  -->