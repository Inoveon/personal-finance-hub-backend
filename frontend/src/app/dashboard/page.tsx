'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ApiStatus {
  status: string;
  timestamp: string;
}

export default function Dashboard() {
  const [apiStatus, setApiStatus] = useState<ApiStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/health`
        );
        if (response.ok) {
          const data = await response.json();
          setApiStatus(data);
        } else {
          setError('Backend retornou status ' + response.status);
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Erro ao conectar ao backend'
        );
      } finally {
        setLoading(false);
      }
    };

    checkBackend();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Voltar
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Backend Status Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Status do Sistema
          </h2>

          {loading ? (
            <p className="text-gray-600">Verificando conexão com backend...</p>
          ) : error ? (
            <div className="p-4 bg-red-50 border border-red-200 rounded text-red-800">
              <p className="font-semibold">Erro:</p>
              <p>{error}</p>
              <p className="text-sm mt-2">
                Certifique-se de que o backend está rodando em{' '}
                <code className="bg-red-100 px-2 py-1 rounded">
                  http://localhost:3001
                </code>
              </p>
            </div>
          ) : (
            <div className="p-4 bg-green-50 border border-green-200 rounded text-green-800">
              <p className="font-semibold">Backend conectado ✓</p>
              <p className="text-sm">
                API disponível em{' '}
                <code className="bg-green-100 px-2 py-1 rounded">
                  {process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}
                </code>
              </p>
              {apiStatus && (
                <p className="text-xs mt-2 text-gray-600">
                  {new Date(apiStatus.timestamp).toLocaleString('pt-BR')}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Saldo Total
            </h3>
            <p className="text-3xl font-bold text-blue-600">R$ 0,00</p>
            <p className="text-sm text-gray-500 mt-2">Em desenvolvimento</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Receitas
            </h3>
            <p className="text-3xl font-bold text-green-600">R$ 0,00</p>
            <p className="text-sm text-gray-500 mt-2">Em desenvolvimento</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Despesas
            </h3>
            <p className="text-3xl font-bold text-red-600">R$ 0,00</p>
            <p className="text-sm text-gray-500 mt-2">Em desenvolvimento</p>
          </div>
        </div>
      </main>
    </div>
  );
}
