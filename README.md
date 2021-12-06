<h1 align="center">Technical Challenge - Cashforce</h1>

<h2 align="center">Bem-vindo ao meu repositorio do Desafio Tecnico da Cashforce</h2>

<h3>Introdução</h3>
  <p>Esse desafio tecnico foi realizado para processo seletivo de uma empresa chamada Cashforce.</p>
  <p>O objetivo do desafio era criar uma página mostrando as notas fiscais de um determinado usuário.</p>
    
<h4>Tecnologias usadas</h4>
  <h5>Backend</h5>
  
    - NodeJs com Express;
    - Cors para integração com o front;
    - MySQL - ORM Sequelize;
    - Arquitetura MSC e RESTful;
  
  <h5>Front End</h5>
  
    - ReactJs;
    - Material UI;
    - Axios para integração com o Backend;
 
<h3>Objetivos</h3>
  <p>O objetivo foi criar uma API backend com o Sequelize e Express, criando as tabelas através de migrations e seeders, espelhando o exemplo do DB dado. Após isso, foi criado uma página frontend, em reactjs, mostrando as notas fiscais referentes àquela pessoa. Nas notas fiscais são mostradas: O número da nota, quem sacou, quem cedeu, quando emitiu, o valor e o status do pedido. Além disso, há um botão para mostrar os dados do cedente. Todavia essa área em específico não foi criada mais a fundo.</p>
  <h4>Realizado</h4>
  <h5>Backend</h5>
  
  - [x]  - Obter todas as orders pelo id do usuário
  - [x]  - Obter um usuário específico pelo ID
  - [x]  - Testes integrados
  
  <h5>Frontend</h5>
  
  - [x]  - Mostrar as notas fiscais
  - [ ]  - Testes integrados
 

<h3>Instalação</h3>
#### Requisitos antes da instalação
- GIT instalado
- Node instalado
- Ter um Banco de Dados MySQL instalado e configurado em seu computador com usuário e senha
- Programa para fazer os requests. Recomenda-se o Postman.

1. Abra o terminal e crie uma pasta. Ou se preferir, utilize alguma pasta já criada em seu computador:
```javascript
  mkdir projetos-matthengo
```

2. Vá para a pasta desejada e faça o clone do projeto:
```javascript
  cd projetos-matthengo
  git clone git@github.com:Matthengo/tc-cashforce.git
```

<h4>Backend</h4>
3. Vá para a pasta do backend do projeto e instale as dependencias com o **npm install**:

```javascript
  cd tc-cashforce/backend
  npm install
```

4. Edite o arquivo .env-example com um usuário e senha do seu mysql, e com um nome que você queira do DB.
Renomeie o arquivo para .env

5. Dê o prestart do projeto e, após isso, dê o start:

```javascript
  npm run db:reset
  npm start
```

<h4>FrontEnd</h4>
  6. Abra outro terminal de preferência na pasta tc-cashforce (botão direito "Abrir no Terminal"), vá para a pasta frontend e instale as dependências.

```javascript
  cd frontend
  npm install
```

7. Dê o start e espere alguns segundos, pois o projeto irá abrir no seu browser

```javascript
  npm start
```
<h3>To-Do</h3>
🚧 Em construção 🚧

<h3>Site Deploy</h3>
🚧 Em construção 🚧
