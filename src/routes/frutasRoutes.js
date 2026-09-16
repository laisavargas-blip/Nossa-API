import { Router } from 'express';
import frutaService from '../services/frutaService.js';

const router = Router();

// Endpoint GET: Lista as frutas
router.get('/frutas', async (req, res) => {
  const frutas = await frutaService.listarTodas();
  return res.json(frutas);
});

// Endpoint POST: Cadastra uma nova fruta
router.post('/frutas', async (req, res) => {
  const novaFruta = await frutaService.criar(req.body);
  return res.status(201).json(novaFruta);
});

export default router;