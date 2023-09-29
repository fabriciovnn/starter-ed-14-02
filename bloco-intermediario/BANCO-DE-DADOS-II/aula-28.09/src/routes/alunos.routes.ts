import { Router } from "express";
import { AlunoController } from "../controllers";

export function alunosRoutes() {
  const router = Router();
  const controller = new AlunoController();

  router.get('/');
  router.get('/:id');
  router.post('/', controller.cadastrar);
  router.put('/:id');
  router.delete('/:id');

  return router;
}
