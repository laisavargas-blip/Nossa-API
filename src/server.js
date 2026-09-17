<<<<<<< HEAD
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
=======
import express from 'express';
import cors from 'cors';
import frutasRoutes from './routes/frutasRoutes.js';

const app = express();

app.use(cors());           // Libera acesso para o Front-end
app.use(express.json());   // Permite receber dados em formato JSON
app.use(frutasRoutes);     // Registra as rotas da API

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
>>>>>>> 980e7b8dd481863809c14477c749f0d241b6b703
});