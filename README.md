# DRIVEN.T FULL STACK 
Continuação de um projeto legado, agora com intuito de implementar um gerenciamento de atividades que acontecerão no hotel reservado. Dessa vez utilizando a medotodologia Scrum como ferramenta pelo grupo.

## Sobre
Os seguintes requisitos foram implementados:
- Somente quem for autorizado(inscrito, ticket pago e hotel reservado)pode ter acesso a essa página de atividades
- Para um evento de modalidade presencial, o usuário poderá escolher se deseja com ou sem hospedagem (hotel).
- O usuário também poderá escolher uma formas de pagamento.
- Além disso, o usuário também escolhe as suas atividades no evento.
- Por fim, também é possível emitir um certificado de participação do evento.

## Tecnologias
Usamos as seguintes ferramentas e frameworks:
<img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/> <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/> <img src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"/>

## Como rodar

1. Clone este repositório
2. Instale todas as dependências
   
### `npm i`


4. Crie um banco de dados PostgreSQL com o nome que desejar

6. Configure o arquivo `.env.development` usando o arquivo `.env.example` (consulte "Executando o aplicativo localmente ou dentro da seção docker" para obter detalhes)

8. Execute todas as migrações


### `npm run dev:migration:run`

6. seed db


### `npm run dev:seed`


6. Execute o back-end em um ambiente de desenvolvimento:


### `npm run dev`


## Como executar testes

1. Siga as etapas da última seção

3. Configure o arquivo `.env.test` usando o arquivo `.env.example` (consulte a seção "Executando o aplicativo localmente ou dentro do docker" para obter detalhes)

5. Execute todas as migrações:

### `npm run test:migration:run`


4. Execute o teste:


### `npm run test`


## Construindo e iniciando a produção


### `npm run build`
### `npm start`




## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env.development` file using the `.env.example` file (see "Running application locally or inside docker section" for details)
5. Run all migrations

```bash
npm run dev:migration:run
```

6. Seed db

```bash
npm run dev:seed
```

6. Run the back-end in a development environment:

```bash
npm run dev
```

## How to run tests

1. Follow the steps in the last section
2. Configure the `.env.test` file using the `.env.example` file (see "Running application locally or inside docker" section for details)
3. Run all migrations:

```bash
npm run test:migration:run
```

4. Run test:

```bash
npm run test
```

## Building and starting for production

```bash
npm run build
npm start
```

## Running migrations or generate prisma clients

Before running migrations make sure you have a postgres db running based on `.env.development` or `.env.test` file for each environment. You can start a postgres instance by typing `npm run dev:postgres` or `npm run test:postgres`. The host name is the name of the postgres container inside docker-compose file if you are running the application inside a docker container or localhost if you are running it locally.

You can operate on databases for different environments, but it is necessary to populate correct env variables for each environment first, so in order to perform db operations type the following commands:

- `npm run dev:migration:run` - run migrations for development environment by loading envs from .env.development file. It uses [dotenv-cli](https://github.com/entropitor/dotenv-cli#readme) to load envs from .env.development file.
- `npm run test:migration:run` - the same, but for test environment

- `npm run dev:migration:generate -- --name ATOMIC_OPERATION_NAME` - generate and run migration and prisma client for development environment by loading envs from .env.development file. Replace `ATOMIC_OPERATION_NAME` by the name of the migration you want to generate.

## What to do when add new ENV VARIABLES

There are several things you need to do when you add new ENV VARIABLES:
- Add them to `.env.example` file
- Add them to your local `.env.development` and `.env.test` files
