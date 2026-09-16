import pg from 'pg';
import 'dotenv/config';

// Instância o pool de conexões usando as variáveis do .env
export const pool = new pg.Pool();