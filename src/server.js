import express from "express";

import {
    listarFrutas,
    buscarFruta,
    criarFruta
} from "./services/frutasService.js";

const app = express();

app.use(express.json());

// Listar todas as frutas
app.get("/frutas", async (req, res) => {
    const frutas = await listarFrutas();
    res.json(frutas);
});

// Buscar uma fruta pelo ID
app.get("/frutas/:id", async (req, res) => {
    const fruta = await buscarFruta(req.params.id);
    res.json(fruta);
});

// Criar uma nova fruta
app.post("/frutas", async (req, res) => {
    const { nome, tipo, preco, quantidade } = req.body;

    const fruta = await criarFruta(
        nome,
        tipo,
        preco,
        quantidade
    );

    res.status(201).json(fruta);
});

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});