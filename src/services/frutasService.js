import { pool } from '../database/connection.js';

class FrutaService {
  // Busca todas as frutas no banco
  async listarTodas() {
    const res = await pool.query('SELECT * FROM frutas ORDER BY nome');
    return res.rows;
  }

  // Cadastra uma nova fruta com parâmetros seguros ($1, $2...)
  async criar({ nome, tipo, preco, quantidade }) {
    const res = await pool.query(
      'INSERT INTO frutas (nome, tipo, preco, quantidade) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, tipo, preco, quantidade]
    );
    return res.rows[0];
  }
}

export default new FrutaService();