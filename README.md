# App Horários - API

API REST para gerenciamento de horários acadêmicos da UFFS (Universidade Federal da Fronteira Sul).

## Sobre o Projeto

O App Horários API é o backend do sistema de gerenciamento de horários acadêmicos da UFFS. Esta API REST fornece endpoints para manipulação de horários de aulas, componentes curriculares (CCRs), cursos, docentes, ofertas e usuários. O sistema implementa autenticação baseada em JWT e controle granular de permissões para diferentes níveis de acesso.

## Funcionalidades

- **API REST**: Endpoints RESTful para todas as operações
- **Autenticação JWT**: Sistema de autenticação com tokens de acesso e refresh
- **Controle de Permissões**: Sistema baseado em grupos e permissões individuais
- **Gestão de Horários**: CRUD completo de horários de aulas
- **Componentes Curriculares (CCRs)**: Gerenciamento de disciplinas e ementas
- **Cursos**: Administração de cursos e vinculação com CCRs
- **Docentes**: Cadastro e gerenciamento de professores
- **Ofertas**: Controle de ofertas de disciplinas por semestre/ano
- **Ano/Semestre**: Gerenciamento de períodos letivos
- **Endpoints Públicos**: Rotas públicas para visualização de horários sem autenticação

## Tecnologias

### Core
- **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript
- **[Express.js](https://expressjs.com/)** - Framework web minimalista e flexível
- **[PostgreSQL](https://www.postgresql.org/)** - Sistema de gerenciamento de banco de dados relacional

### ORM e Banco de Dados
- **[Sequelize](https://sequelize.org/)** - ORM para Node.js com suporte a PostgreSQL
- **[Sequelize CLI](https://github.com/sequelize/cli)** - Interface de linha de comando do Sequelize
- **[pg](https://node-postgres.com/)** - Cliente PostgreSQL para Node.js
- **[pg-promise](https://github.com/vitaly-t/pg-promise)** - Interface PostgreSQL via Promises

### Autenticação e Segurança
- **[Passport.js](http://www.passportjs.org/)** - Middleware de autenticação
- **[Passport-JWT](https://github.com/mikenicholson/passport-jwt)** - Estratégia JWT para Passport
- **[Helmet](https://helmetjs.github.io/)** - Proteção de headers HTTP
- **[CORS](https://github.com/expressjs/cors)** - Controle de acesso entre origens

### Utilitários
- **[dotenv](https://github.com/motdotla/dotenv)** - Gerenciamento de variáveis de ambiente
- **[morgan](https://github.com/expressjs/morgan)** - Logger de requisições HTTP
- **[moment.js](https://momentjs.com/)** - Manipulação de datas
- **[express-async-handler](https://github.com/Abazhenov/express-async-handler)** - Tratamento de erros assíncronos
- **[cls-hooked](https://github.com/Jeff-Lewis/cls-hooked)** - Armazenamento de contexto de continuação

### Ferramentas
- **[Yarn](https://yarnpkg.com/)** - Gerenciador de pacotes
- **[ERD Editor](https://marketplace.visualstudio.com/items?itemName=dineug.vuerd-vscode)** - Editor de diagramas ER

## Estrutura do Projeto

```
app-horarios-api/
├── src/
│   ├── config/              # Configurações
│   │   └── localConnection.js  # Configuração de conexão com banco
│   ├── controllers/         # Controladores das rotas
│   │   ├── ano-semestre-controller.js
│   │   ├── auth-controller.js
│   │   ├── ccrs-controller.js
│   │   ├── cursos-controller.js
│   │   ├── docentes-controller.js
│   │   ├── horarios-controller.js
│   │   ├── ofertas-controller.js
│   │   ├── public-controller.js
│   │   └── usuarios-controller.js
│   ├── enums/               # Enumeradores
│   │   └── permissoes.js   # Definições de permissões
│   ├── middleware/          # Middlewares
│   │   ├── auth.js         # Middleware de autenticação
│   │   └── autorizacao.js  # Middleware de autorização
│   ├── models/              # Modelos do Sequelize
│   │   ├── ano-semestre.js
│   │   ├── categoria-permissao.js
│   │   ├── ccr.js
│   │   ├── curso-ccr.js
│   │   ├── curso.js
│   │   ├── docente-curso.js
│   │   ├── docente.js
│   │   ├── grupo-permissao.js
│   │   ├── grupo.js
│   │   ├── horarios.js
│   │   ├── index.js
│   │   ├── oferta.js
│   │   ├── permissao.js
│   │   ├── usuario-curso.js
│   │   ├── usuario-grupo.js
│   │   └── usuario.js
│   ├── repository/          # Camada de acesso a dados
│   │   ├── ano-semestre-repository.js
│   │   ├── auth-repository.js
│   │   ├── ccrs-repository.js
│   │   ├── cursos-repository.js
│   │   ├── docentes-repository.js
│   │   ├── horarios-repository.js
│   │   ├── ofertas-repository.js
│   │   ├── permissoes-repository.js
│   │   └── usuarios-repository.js
│   ├── services/            # Lógica de negócio
│   │   ├── ano-semestre-service.js
│   │   ├── auth-service.js
│   │   ├── ccrs-service.js
│   │   ├── cursos-service.js
│   │   ├── docentes-service.js
│   │   ├── horarios-service.js
│   │   ├── ofertas-service.js
│   │   ├── permissoes-service.js
│   │   └── usuarios-service.js
│   ├── public/              # Arquivos públicos
│   └── server.js            # Arquivo principal da aplicação
├── database.erd.json        # Diagrama ER do banco
├── package.json             # Dependências e scripts
└── README.md               # Este arquivo
```

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **Yarn** (gerenciador de pacotes)
- **PostgreSQL** (versão 12 ou superior)

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/ccuffs/app-horarios-api.git
cd app-horarios-api
```

2. Instale as dependências:
```bash
yarn install
```

3. Configure o banco de dados PostgreSQL:
```bash
# Acesse o PostgreSQL
psql -U postgres

# Crie o banco de dados
CREATE DATABASE app_horarios;

# Execute o script de criação das tabelas
psql -U postgres -d app_horarios -f database.sql

# (Opcional) Insira dados de teste
psql -U postgres -d app_horarios -f dados-teste.sql
```

4. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto:
```env
# Banco de Dados
DBHOST=endereco_postgres
DBPORT=porta_postgres
DBNAME=nome_banco
DBUSER=usuario_banco
DBPASS=sua_senha
```

## Como Usar

### Iniciar o Servidor

Execute o servidor:
```bash
node src/server.js
```

O servidor estará disponível em `http://localhost:3010`

### Desenvolvimento

Para desenvolvimento com auto-reload, você pode usar nodemon:
```bash
yarn global add nodemon
nodemon src/server.js
```

## Endpoints da API

### Rotas Públicas

```
GET  /api/public/horarios          # Lista horários públicos
GET  /api/public/horarios/:id      # Busca horário específico
GET  /api/public/cursos            # Lista cursos
GET  /api/public/ccrs              # Lista CCRs
```

### Autenticação

```
POST /api/auth/login               # Login de usuário
POST /api/auth/refresh             # Renovar token de acesso
POST /api/auth/logout              # Logout de usuário
```

### Horários (Autenticado)

```
GET    /api/horarios               # Lista horários
GET    /api/horarios/:id           # Busca horário específico
POST   /api/horarios               # Cria novo horário
PUT    /api/horarios/:id           # Atualiza horário
DELETE /api/horarios/:id           # Remove horário
```

### CCRs (Autenticado)

```
GET    /api/ccrs                   # Lista CCRs
GET    /api/ccrs/:id               # Busca CCR específico
POST   /api/ccrs                   # Cria novo CCR
PUT    /api/ccrs/:id               # Atualiza CCR
DELETE /api/ccrs/:id               # Remove CCR
```

### Cursos (Autenticado)

```
GET    /api/cursos                 # Lista cursos
GET    /api/cursos/:id             # Busca curso específico
POST   /api/cursos                 # Cria novo curso
PUT    /api/cursos/:id             # Atualiza curso
DELETE /api/cursos/:id             # Remove curso
```

### Docentes (Autenticado)

```
GET    /api/docentes               # Lista docentes
GET    /api/docentes/:id           # Busca docente específico
POST   /api/docentes               # Cria novo docente
PUT    /api/docentes/:id           # Atualiza docente
DELETE /api/docentes/:id           # Remove docente
```

### Ofertas (Autenticado)

```
GET    /api/ofertas                # Lista ofertas
GET    /api/ofertas/:id            # Busca oferta específica
POST   /api/ofertas                # Cria nova oferta
PUT    /api/ofertas/:id            # Atualiza oferta
DELETE /api/ofertas/:id            # Remove oferta
```

### Ano/Semestre (Autenticado)

```
GET    /api/ano-semestre           # Lista anos/semestres
GET    /api/ano-semestre/:id       # Busca período específico
POST   /api/ano-semestre           # Cria novo período
PUT    /api/ano-semestre/:id       # Atualiza período
DELETE /api/ano-semestre/:id       # Remove período
```

### Usuários (Autenticado)

```
GET    /api/usuarios               # Lista usuários
GET    /api/usuarios/:id           # Busca usuário específico
POST   /api/usuarios               # Cria novo usuário
PUT    /api/usuarios/:id           # Atualiza usuário
DELETE /api/usuarios/:id           # Remove usuário
```

## Sistema de Autenticação

A API utiliza autenticação baseada em JWT (JSON Web Tokens):

- **Token de Acesso**: Válido por 1 hora (configurável)
- **Refresh Token**: Válido por 7 dias (configurável)
- **Estratégia**: Passport-JWT para validação de tokens
- **Headers**: Requer `Authorization: Bearer <token>` nas rotas protegidas

### Fluxo de Autenticação

1. Cliente envia credenciais para `/api/auth/login`
2. Servidor valida e retorna access token e refresh token
3. Cliente inclui access token no header de requisições subsequentes
4. Quando o access token expira, cliente usa refresh token em `/api/auth/refresh`
5. Servidor valida refresh token e retorna novo access token

## Sistema de Permissões

O controle de acesso é baseado em:

- **Grupos**: Usuários são atribuídos a grupos
- **Permissões**: Grupos possuem conjunto de permissões
- **Categorias de Permissões**: Organização hierárquica de permissões

### Principais Categorias

- `HORARIOS`: Gestão de horários
- `CCR`: Gestão de componentes curriculares
- `OFERTAS_CURSO`: Gestão de ofertas
- `DOCENTES`: Gestão de docentes
- `CURSOS`: Gestão de cursos
- `USUARIOS`: Gestão de usuários

### Níveis de Permissão

- **Visualizar Próprios**: Ver apenas dados próprios
- **Visualizar Todos**: Ver todos os dados
- **Criar**: Criar novos registros
- **Editar**: Modificar registros existentes
- **Excluir**: Remover registros

## Banco de Dados

### Estrutura

O banco de dados utiliza PostgreSQL com as seguintes tabelas principais:

- `usuarios`: Usuários do sistema
- `grupos`: Grupos de usuários
- `permissoes`: Permissões individuais
- `categoria_permissao`: Categorias de permissões
- `cursos`: Cursos acadêmicos
- `ccrs`: Componentes curriculares
- `docentes`: Professores
- `horarios`: Horários de aulas
- `ofertas`: Ofertas de disciplinas
- `ano_semestre`: Períodos letivos

### Modelagem

O diagrama ER está disponível no arquivo `database.erd.json` e pode ser visualizado com a extensão [ERD Editor](https://marketplace.visualstudio.com/items?itemName=dineug.vuerd-vscode) do VS Code.

### Migrações

Para criar o banco de dados do zero:
```bash
psql -U postgres -d app_horarios -f database.sql
```

Para inserir dados de teste:
```bash
psql -U postgres -d app_horarios -f dados-teste.sql
```

## Scripts Disponíveis

Principais comandos do projeto:

```bash
# Iniciar servidor
node src/server.js

# Criar banco de dados
psql -U postgres -d app_horarios -f database.sql

# Inserir dados de teste
psql -U postgres -d app_horarios -f dados-teste.sql
```

## Arquitetura

O projeto segue uma arquitetura em camadas:

1. **Controllers**: Recebem requisições HTTP e retornam respostas
2. **Services**: Implementam a lógica de negócio
3. **Repositories**: Gerenciam acesso aos dados
4. **Models**: Definem estrutura e relacionamentos do banco de dados
5. **Middleware**: Interceptam requisições para autenticação e autorização

## Segurança

- **Helmet**: Proteção de headers HTTP contra vulnerabilidades conhecidas
- **CORS**: Controle de acesso entre origens diferentes
- **JWT**: Tokens com expiração para autenticação segura
- **Passport**: Estratégias de autenticação robustas
- **Variáveis de Ambiente**: Credenciais sensíveis em arquivo `.env`

## Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Links Relacionados

- [Frontend - App Horários](https://github.com/ccuffs/app-horarios-front)
- [Universidade Federal da Fronteira Sul](https://www.uffs.edu.br/)
- [Express.js Documentation](https://expressjs.com/)
- [Sequelize Documentation](https://sequelize.org/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## Equipe

Desenvolvido pela comunidade CCUFFS e contribuidores.

## Suporte

Para dúvidas ou problemas, abra uma [issue](https://github.com/ccuffs/app-horarios-api/issues) no GitHub.

---

Feito para a UFFS
