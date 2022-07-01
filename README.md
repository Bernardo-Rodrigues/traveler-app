# Traveler

O front-end de um aplicativo full stack com o conceito de site de guias de viagem, onde você pode criar uma conta pessoal e explorar alguns dos destinos mais famosos do mundo, vendo informações sobre cada um e também podendo interagir com eles marcando como favorito, reservando uma viagem, recebendo uma conquista quando já visitou um destino e dando uma nota ao destino.

<div align='center'>
  <img  src='https://hjjvsmpqvznxkydtrqzo.supabase.co/storage/v1/object/public/assets/Readme1.png' />
  <img  src='https://hjjvsmpqvznxkydtrqzo.supabase.co/storage/v1/object/public/assets/Readme2.png' />
  <img  src='https://hjjvsmpqvznxkydtrqzo.supabase.co/storage/v1/object/public/assets/Readme3.png' />
</div>

Experimente agora em https://traveler.net.br
<br/>
Link para o repositório do back-end: https://github.com/Bernardo-Rodrigues/traveler-api

## Sobre

As principais funcionalidades deste aplicativo são:

- Crie uma conta pessoal (OAuth)
- Veja uma lista dos destinos mais famosos do mundo
- Veja alguns detalhes sobre cada destino
- Veja a localidade do destino através de uma integração com o google maps
- Marcar um destino como favorito
- Veja a lista de seus destinos favoritos
- Marcar um destino como visitado
- Receba conquistas para cada destino visitado
- Dê uma nota para um destino
- Veja uma tabela de classificação dos destinos mais bem avaliados
- Reserve uma viagem para um destino
- Veja sua programação de viagens
- Receba dicas específicas quando estiver em uma viagem
- Edite seu perfil

## Por quê?

Este aplicativo foi criado para colocar em prática uma ideia original de um guia de viagem pessoal para ajudar com informações sobre os destinos que quero conhecer, desenvolvido também para praticar a criação de testes automatizados com jest, para colocar o projeto em contêineres docker e usar fluxos de CI /CD.

## Tecnologias

As seguintes ferramentas e frameworks foram usados na construção do projeto:<br>

  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
  ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
  ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
  ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
  ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
  ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
  ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
  ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Como rodar

1. Clone o repositório (O do back-end também)

2. Instale o docker
```bash
 sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

```

4. Configure as variaveis de ambiente

4. Rode o container com
```bash
docker-compose up --build
```

5. Por fim, acesse http://localhost:3000 no seu navegador preferido
