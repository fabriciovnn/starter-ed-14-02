import { NextFunction, Request, Response } from "express";

export class CadastroAluno {

  public validar(req: Request, res: Response, next: NextFunction) {
    const {nome, email, senha, idade} = req.body;

    if(!nome || !email || !senha) {
      return res.status(400).json({
        ok: false,
        mensagem: 'Faltam campos!',
      });
    }

    if(!email.includes('@') || !email.includes('.com')) {
      return res.status(400).json({
        ok: false,
        mensagem: 'Email invalido!',
      })
    }
      
    if(senha.length < 6) {
      return res.status(400).json({
        ok: false,
        mensagem: 'Minimo 6 caracteres para senha',
      });
    }

    return next();
  }
}

