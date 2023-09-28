"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
// CRIAR O SERVIDOR/APP COM EXPRESS
const app = (0, express_1.default)();
// CONFIGURAÇÕES DO SERVIDOR - middlewares
app.use(express_1.default.json()); // converte o JSON em um objeto JS
app.use(express_1.default.urlencoded({ extended: false })); // converte os query params unicode
app.use((0, cors_1.default)()); // configuração da politica de CORS
// DAR O START NO SERVIDOR
app.listen(process.env.PORTA, () => console.log(`Servidor rodando na porta ${process.env.PORTA}`));
app.get('/', (_, res) => res.status(200).json({ message: 'API 14ED T02' }));
