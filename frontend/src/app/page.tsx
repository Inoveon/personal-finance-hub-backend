import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Personal Finance Hub
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Controle financeiro pessoal simples e eficiente
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Ir para Dashboard
          </Link>

          <a
            href="https://github.com/Inoveon/personal-finance-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition"
          >
            GitHub
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Transações
            </h3>
            <p className="text-gray-600">
              Registre receitas e despesas com facilidade
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Categorias
            </h3>
            <p className="text-gray-600">
              Organize suas transações por categorias
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Relatórios
            </h3>
            <p className="text-gray-600">
              Visualize sua situação financeira
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
