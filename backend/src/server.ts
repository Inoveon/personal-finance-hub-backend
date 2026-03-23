import express, { Express, Request, Response } from 'express';
import cors from 'cors';

export function createApp(): Express {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Health check
  app.get('/health', (_req: Request, res: Response) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
  });

  // API Routes
  app.get('/api/auth/status', (_req: Request, res: Response) => {
    res.json({ authenticated: false, message: 'Auth module not implemented yet' });
  });

  app.post('/api/auth/login', (req: Request, res: Response) => {
    res.status(501).json({ error: 'Login endpoint not implemented yet' });
  });

  app.get('/api/transactions', (_req: Request, res: Response) => {
    res.json({ transactions: [], message: 'Transactions module not implemented yet' });
  });

  app.post('/api/transactions', (req: Request, res: Response) => {
    res.status(501).json({ error: 'Create transaction endpoint not implemented yet' });
  });

  app.get('/api/reports', (_req: Request, res: Response) => {
    res.json({ reports: [], message: 'Reports module not implemented yet' });
  });

  // 404
  app.use((_req: Request, res: Response) => {
    res.status(404).json({ error: 'Not found' });
  });

  return app;
}
