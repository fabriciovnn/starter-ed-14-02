import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  Paper,
  TextareaAutosize,
  Stack,
  styled,
  Modal,
  Fab,
  TextField,
} from "@mui/material";
import { AdsClick, Add } from "@mui/icons-material";
import { useState } from "react";

const TextareaAutosizeStyled = styled(TextareaAutosize)(
  () => `
  width: 500px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
`
);

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AdsClick />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sorteio De Tarefas
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ overflow: "hidden" }}>
        <Container maxWidth="sm" sx={{ pt: 8, pb: 6 }}>
          <Typography
            variant="h4"
            component="h1"
            textAlign="center"
            marginBottom={2}
          >
            14ª EDIÇÃO - PROGRAMA STARTER TURMA 02
          </Typography>

          <Typography
            paragraph
            variant="h6"
            textAlign="center"
            marginBottom={3}
          >
            Sorteio aleatório de tarefas de desenvolvimento.
          </Typography>
        </Container>

        <Container maxWidth="sm" sx={{ display: "flex" }}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <TableContainer component={Paper} sx={{ maxWidth: 300 }}>
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nome Aluno</TableCell>
                    <TableCell align="right">Tarefa</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Ana
                    </TableCell>
                    <TableCell align="right">Front End</TableCell>
                  </TableRow>

                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell scope="row">Vitória</TableCell>
                    <TableCell align="right">Design</TableCell>
                  </TableRow>

                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell scope="row">Fabricio</TableCell>
                    <TableCell align="right">Back End</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <TextareaAutosizeStyled
              aria-label="empty textarea"
              placeholder="Empty"
              minRows={10}
            />
          </Stack>
        </Container>
        <Fab
          onClick={handleOpen}
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", right: 5, bottom: 5 }}
        >
          <Add />
        </Fab>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Cadastro de Tarefas
            </Typography>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="tarefa 1"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="tarefa 2"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="standard-basic"
                label="tarefa 3"
                variant="outlined"
                fullWidth
              />
              <Stack height={50} direction="row" justifyContent="center">
                <Button onClick={handleClose} variant="contained">
                  Sortear
                </Button>
              </Stack>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
}

export default Home;
