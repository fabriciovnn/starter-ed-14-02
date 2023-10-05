import { Router } from "express";
import { AlunoController } from "../controllers";
import { CadastroAluno } from "../middlewares/cadastro-aluno.middleware";

export function alunosRoutes() {
  const router = Router();
  const controller = new AlunoController();
  const cadastrarAluno = new CadastroAluno();

  //dentro do array ficam os middlewares
  router.get('/', [cadastrarAluno.validar], controller.listAll);
  router.get('/:id', controller.listByID);
  router.post('/', controller.create);
  router.put('/:id', controller.update);
  router.delete('/:id', controller.delete);

  return router;
}
