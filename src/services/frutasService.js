import { pool} from "../database/connection.js";

async function listarFrutas() {
    const resultado = await pool.query("SELECT * FROM frutas");
    return resultado.rows;
}

async function buscarFruta(id) {
    const resultado = await pool.query(
        "SELECT * FROM frutas WHERE id = $1",
        [id]
    );
    return resultado.rows[0];
}

async function criarFruta(nome, tipo, preco, quantidade) {
    const resultado = await pool.query(
        `INSERT INTO frutas (nome, tipo, preco, quantidade)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
        [nome, tipo, preco, quantidade]
    );

    return resultado.rows[0];
}

export {
    listarFrutas,
    buscarFruta,
    criarFruta
};