# Personal Finance Hub

Sistema simples de controle financeiro pessoal com backend (Express + Prisma) e frontend (Next.js + React).

## Estrutura

```
personal-finance-hub/
├── backend/          # Express.js + TypeScript + Prisma
└── frontend/         # Next.js 16 + React 19 + Tailwind
```

## Setup Rápido

### Pré-requisitos
- Node.js 20+
- npm 10+

### Instalação

```bash
# Clonar repositório
git clone https://github.com/Inoveon/personal-finance-hub.git
cd personal-finance-hub

# Instalar dependências (root workspace)
npm install

# Setup do backend
cd backend
npx prisma migrate dev --name init
cd ..

# Setup do frontend
cd frontend
npm install
cd ..
```

### Rodar em desenvolvimento

```bash
# Do diretório raiz - inicia backend e frontend em paralelo
npm run dev
```

Ou separadamente:

```bash
# Terminal 1 - Backend (porta 3001)
cd backend
npm run dev

# Terminal 2 - Frontend (porta 3000)
cd frontend
npm run dev
```

**Frontend**: http://localhost:3000
**Backend API**: http://localhost:3001

## Stack

### Backend
- **Express.js** - Framework web
- **TypeScript** - Type safety
- **Prisma 7** - ORM + migrations
- **Zod** - Validação de schemas
- **JWT** - Autenticação

### Frontend
- **Next.js 16** - React framework
- **React 19** - Library UI
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **ShadCN/ui** - Componentes prontos

## Desenvolvimento

### Backend
```bash
cd backend
npm run dev       # Rodar em desenvolvimento
npm run build     # Build para produção
npm run prisma    # CLI do Prisma
```

### Frontend
```bash
cd frontend
npm run dev       # Rodar em desenvolvimento
npm run build     # Build para produção
npm run lint      # ESLint
```

## Variáveis de Ambiente

### Backend (`.env`)
```
DATABASE_URL="file:./dev.db"
JWT_SECRET="seu-secret-aleatorio-desenvolvimento"
NODE_ENV="development"
PORT=3001
```

### Frontend (`.env.local`)
```
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

## Endpoints Iniciais

- `POST /api/auth/login` - Login
- `GET /api/transactions` - Listar transações
- `POST /api/transactions` - Criar transação
- `GET /api/reports` - Relatórios financeiros

## Licença

MIT
