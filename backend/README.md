# Personal Finance Hub - Backend

Backend Express.js + TypeScript + Prisma para o Personal Finance Hub.

## Setup

```bash
# Instalar dependências
npm install

# Copiar variáveis de ambiente
cp .env.example .env

# Rodar migrations do Prisma
npx prisma migrate dev --name init

# Rodar em desenvolvimento
npm run dev
```

## Desenvolvimento

- `npm run dev` - Rodar com hot reload (tsx watch)
- `npm run build` - Compilar TypeScript
- `npm run start` - Rodar versão compilada
- `npm run prisma` - CLI do Prisma
- `npm run prisma:studio` - Abrir Prisma Studio (GUI)

## Estrutura

```
src/
├── main.ts          # Entry point
├── server.ts        # App Express
└── modules/
    ├── auth/        # Autenticação (JWT)
    ├── transactions/# Gestão de transações
    └── reports/     # Relatórios financeiros
```

## Modelos Iniciais

- **User**: Usuários do sistema
- **Category**: Categorias de transações (renda/despesa)
- **Transaction**: Transações financeiras

## Stack

- **Express.js** - Framework web
- **Prisma 7** - ORM + migrations
- **Zod** - Validação
- **JWT** - Autenticação
- **TypeScript** - Type safety
