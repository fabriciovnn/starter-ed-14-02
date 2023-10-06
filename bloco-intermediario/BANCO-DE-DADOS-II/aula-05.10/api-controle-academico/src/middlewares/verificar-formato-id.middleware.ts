import { NextFunction, Request, Response } from 'express';
import { AlunoService } from '../services';
export class VerificarFormatoId {
	public validar(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		if (id.length !== 36) {
			return res.status(400).json({
				ok: false,
				mensagem: 'ID inválido',
			});
		}

		const service = new AlunoService()
		const alunoExiste = service.listarPorID(id)

		if(!alunoExiste) {
			return res.status(400).json({
				ok: false,
				mensagem: 'ID nao existe',
			});
		}
	


		return next();
	}
}
