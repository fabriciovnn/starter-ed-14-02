import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';

// CRIAR O SERVIDOR/APP COM EXPRESS
const app = express();

// CONFIGURAÇÕES DO SERVIDOR - middlewares
app.use(express.json()); // converte o JSON em um objeto JS
app.use(express.urlencoded({ extended: false })); // converte os query params unicode
app.use(cors()); // configuração da politica de CORS

// DAR O START NO SERVIDOR
app.listen(process.env.PORTA, () => console.log(`Servidor rodando na porta ${process.env.PORTA}`));
app.get('/', (_, res) => res.status(200).json({ message: 'API 14ED T02' }));

