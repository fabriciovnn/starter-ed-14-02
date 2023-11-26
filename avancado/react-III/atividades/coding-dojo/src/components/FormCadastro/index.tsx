import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { cadastrar } from "../../store/modules/user/userSlice";

function FormCadastro() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const state = useAppSelector((state) => state.users);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const novoUser = {
      email: event.currentTarget.email.value,
      senha: event.currentTarget.senha.value,
      reSenha: event.currentTarget.reSenha.value,
    };

    if (!novoUser.email || !novoUser.senha || !novoUser.reSenha) {
      alert("Todos os Campos devem ser Preenchidos");
      return;
    }

    if (!novoUser.email.includes("@") || !novoUser.email.includes(".com")) {
      alert("informe um email válido");
      return;
    }

    if (novoUser.senha !== novoUser.reSenha) {
      alert("Os campos Senha e Repetir Senha não são idênticos");
      return;
    }

    if (novoUser.senha.length < 4) {
      alert("Senha deve possuir mais de 4 caracteres");
      return;
    }

    const userExiste = state.find((u) => u.email === novoUser.email);
    if (userExiste) {
      alert("Não Foi Possível Cadastrar. Usuário Já Existe");
      return;
    }

    dispatch(cadastrar({ email: novoUser.email, password: novoUser.senha }));
    alert("Usuário Cadastrado com sucesso");

    navigate("/login");
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        id="senha"
        label="Senha"
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        id="reSenha"
        label="Repetir senha"
        variant="outlined"
        required
        fullWidth
      />

      <Button type="submit" variant="contained" fullWidth>
        Criar conta
      </Button>
    </Box>
  );
}

export default FormCadastro;
