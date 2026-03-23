# Personal Finance Hub - Frontend

Frontend Next.js 16 + React 19 + Tailwind CSS para o Personal Finance Hub.

## Setup

```bash
# Instalar dependências
npm install

# Copiar variáveis de ambiente
cp .env.example .env.local

# Rodar em desenvolvimento
npm run dev
```

## Desenvolvimento

- `npm run dev` - Rodar em desenvolvimento (porta 3000)
- `npm run build` - Build para produção
- `npm run start` - Rodar versão compilada
- `npm run lint` - ESLint

## Estrutura

```
src/
├── app/
│   ├── layout.tsx       # Layout root
│   ├── page.tsx         # Homepage
│   ├── globals.css      # Estilos globais
│   └── dashboard/
│       └── page.tsx     # Dashboard
└── components/          # Componentes reutilizáveis
```

## Stack

- **Next.js 16** - React framework com SSR/SSG
- **React 19** - Library UI
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling utility-first
- **Axios** - HTTP client
- **Lucide React** - Icons

## Páginas

- `/` - Home com informações gerais
- `/dashboard` - Dashboard principal com status do sistema

## Variáveis de Ambiente

### `.env.local`

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Este é um variável pública (acessível no navegador) que aponta para o backend.
