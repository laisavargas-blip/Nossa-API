import express from 'express';
import cors from 'cors';
import frutasRoutes from './routes/frutasRoutes.js';

const app = express();

app.use(cors());           // Libera acesso para o Front-end
app.use(express.json());   // Permite receber dados em formato JSON
app.use(frutasRoutes);     // Registra as rotas da API

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});