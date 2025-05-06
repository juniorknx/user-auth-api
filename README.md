# 📘 User Management API

API RESTful construída com **NestJS**, **Prisma ORM** e **PostgreSQL** para gerenciamento de usuários e seus respectivos endereços. Possui autenticação com **JWT** e permite:

- Cadastro de novos usuários
- Autenticação (login) com geração de token JWT
- Listagem de usuários (rota protegida)
- Remoção de usuários
- Remoção de endereços vinculados a um usuário

---

## 🚀 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) — Framework Node.js para aplicações escaláveis
- [Prisma](https://www.prisma.io/) — ORM moderno e intuitivo para Node.js
- [PostgreSQL](https://www.postgresql.org/) — Banco de dados relacional
- [JWT](https://jwt.io/) — Autenticação com JSON Web Tokens
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) — Hash de senhas

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio


📚 Rotas da API
As rotas com 🔒 requerem token JWT no header Authorization: Bearer <token>

🔐 Autenticação
POST /auth/login
Realiza login do usuário e retorna o token JWT

👤 Usuários
GET /users 🔒
Lista todos os usuários

POST /users
Cria um novo usuário

PUT /users/:id
Atualiza os dados de um usuário

DELETE /users/:id 🔒
Remove um usuário pelo ID

🏠 Endereços
PUT /users/:userId/addresses/:addressId
Atualiza um endereço associado a um usuário