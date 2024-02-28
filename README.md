# Projeto Node.js com Mongoose

## Descrição
O projeto consiste em uma aplicação Node.js que se conecta a um banco de dados MongoDB usando o Mongoose. 
Ele inclui operações CRUD básicas para a model Funcionario

## Requisitos
Node.js
MongoDB
npm (gerenciador de pacotes do Node.js)

## Instalação
Clone o repositório:

````bash
https://github.com/EduardoSobreira/Desafio-Backend.git
````

## Navegue até o diretório do projeto:

````bash
cd nome-do-repositorio
````

## Instale as dependências:

````bash
npm install
````

## Configuração
Certifique-se de ter um servidor MongoDB em execução. 
Você pode instalar o MongoDB localmente ou usar um serviço de hospedagem como MongoDB Atlas.
No nossao caso estamos usando o mongoDB Atlas


## Para iniciar o servidor, execute:

````bash
npm start
````

O servidor estará em execução em http://localhost:3000 por padrão.

Rotas API
GET /funcionario/: Retorna todos os funcionario na coleção.
GET /funcionario/:id: Retorna um funcionario específico pelo ID.
POST /funcionario/: Cria um novo funcionario.
PUT /funcionario/:id: Atualiza um funcionario existente pelo ID.
PATCH /funcionario/:id: Atualiza uma parte do funcionario existente pelo ID.
DELETE /funcionario/:id: Exclui um funcionario existente pelo ID.
