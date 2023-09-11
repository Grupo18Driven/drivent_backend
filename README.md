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
2. Clone e siga as instruções do repositório front-end: https://github.com/Grupo18Driven/drivent_frontend
3. Instale todas as dependências
   
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




