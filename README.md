
# To Do List

Uma aplicação de lista de tarefas desenvolvida com **React + Node.js + Express + MySQL**, com interface moderna, carrossel de dias e atualização de status em tempo real.

## Conceitos

* CRUD completo (Create, Read, Update, Delete)
* API REST
* Componentização no React
* Estado com useState e useEffect
* Manipulação de rotas no Express
* Integração frontend + backend
* Organização por camadas (controllers / routes)
* UI com carrossel + flexbox layout

## Tecnologias

**Frontend**
* React (Vite) – interface e componentes
* JavaScript (ES6+) – lógica da aplicação
* CSS moderno – Flexbox, glassmorphism, variáveis CSS
* Fetch API – comunicação com backend

**Backend**
* Node.js – ambiente do servidor
* Express – criação da API REST
* CORS – comunicação entre front e back
* dotenv – variáveis de ambiente
* MySQL – banco de dados relacional

**Banco de dados**
* MySQL
* criação de database
* tabela tasks
* CRUD via API
## Aprendizados

* Integração Frontend + Backend
* CRUD completo com API REST
* Manipulação de estado no React
* Estilização moderna com CSS puro
* Organização de projeto full stack
* Uso de MySQL com Node.js


## Como rodar o projeto

**1. Clonar o repositório**

bash
git clone https://github.com/seu-usuario/todo-list

**2. Backend**
* cd backend
* npm init -y
* npm install express
* npm install cors
* node server.js

**Crie um arquivo .env:**

* DB_HOST=localhost
* DB_USER=root
* DB_PASSWORD=sua_senha
* DB_NAME=todolist
* PORT=3000

**3. Frontend**
* cd frontend
* npm create vite@latest
* npm run dev

**Estrutura do banco (MySQL)**
* CREATE DATABASE todolist;

* USE todolist;

* CREATE TABLE tasks (
  * id INT AUTO_INCREMENT PRIMARY KEY,
  * titulo VARCHAR(255) NOT NULL,
  * dia VARCHAR(20) NOT NULL,
  * status VARCHAR(20) NOT NULL
);


## Screenshots

<details>
  <summary> Clique para ver o app</summary>

  <br/>

  <img src="https://github.com/user-attachments/assets/bc8058f3-cb12-4951-84d6-17cb597a2d01"/>

</details>

## Authors

- [@YasBezerra](https://github.com/YasBezerra)

