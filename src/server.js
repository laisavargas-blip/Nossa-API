import express from "express";
const {
    listarFrutas,
    buscarFruta,
    criarFruta
} = require("../services/frutasService");

const router = express.Router();