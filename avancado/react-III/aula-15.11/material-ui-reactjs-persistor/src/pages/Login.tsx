import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { createUser } from '../store/modules/users/usersSlice';
import { v4 as uuid } from 'uuid';
import { login, logout } from '../store/modules/users/userSlice';

const Login: React.FC = () => {
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [validate, setValidate] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  const navigate = useNavigate();

  const usersRedux = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const validateLogin = password.length && email.length;
    const validateCreate = validateLogin && nickname.length;

    if (showLogin) {
      setValidate(validateLogin == 0);
    } else {
      setValidate(validateCreate == 0);
    }
  }, [email, password, nickname, showLogin]);

  function handleClick() {
    setShowLogin(!showLogin);
  }

  function handleCreate() {
    if (nickname.length && password.length && email.length) {
      const exist = usersRedux.find((user) => user.email === email);
      if (!exist) {
        dispatch(createUser({ id: uuid(), email, nickname, password }));
      } else {
        alert('Usuário já cadastrado.');
      }
    } else {
      alert('Preencha todos os campos.');
    }
  }

  function handleLogin() {
    const user = usersRedux.find((user) => user.email === email && user.password === password);

    if (user) {
      dispatch(login(user));
      navigate('/');
    } else {
      dispatch(logout());
      alert('Verifique seu e-mail ou a senha');
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent={'center'}>
        <Grid item xs={12}>
          <Typography variant="h2">Login</Typography>
        </Grid>
        {showLogin ? (
          <Grid item xs={12} sm={6}>
            <Paper elevation={2} sx={{ padding: '20px', marginBottom: '20px' }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4">Faça o seu login.</Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="login"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    label="Login"
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    label="Senha"
                    type="password"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button fullWidth disabled={validate} onClick={handleLogin} variant="contained">
                    Logar
                  </Button>
                </Grid>
              </Grid>
            </Paper>

            <Typography component={Button} onClick={handleClick} sx={{ textTransform: 'none' }} variant="body2">
              Não tem conta? Cadastrar.
            </Typography>
          </Grid>
        ) : (
          <Grid item xs={12} sm={6}>
            <Paper elevation={2} sx={{ padding: '20px', marginBottom: '20px' }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4">Faça o seu cadastro.</Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="nickname"
                    value={nickname}
                    onChange={(ev) => setNickname(ev.target.value)}
                    label="Nome / Apelido"
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="login"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    label="Login"
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    label="Senha"
                    type="password"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button fullWidth disabled={validate} onClick={handleCreate} variant="contained">
                    Cadastrar
                  </Button>
                </Grid>
              </Grid>
            </Paper>

            <Typography component={Button} onClick={handleClick} sx={{ textTransform: 'none' }} variant="body2">
              Já tem conta? Logar.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Login;
