import VerifiedUser from "@mui/icons-material/VerifiedUser";
import {
  Box,
  Container,
  Grid,
  Link,
  Stack,
  Typography
} from "@mui/material";
import FormCadastro from "../components/FormCadastro";

function Cadastro() {
  return (
      <Grid container overflow="hidden">
        <Grid item md={8}>
          <img
            alt="Imagem de praia"
            src="./public/maos.jpg"
            height="100%"
            width="100%"
          />
        </Grid>
        <Grid item md={4} display="flex">
          <Box component="section" display="flex" alignItems="center" height='100vh'>
            <Container maxWidth="lg">
              <Stack textAlign="center" justifyContent="center" m={2}>
                <Box>
                  <VerifiedUser color="success" />
                </Box>
                <Typography variant="h5">Cadastrar</Typography>
                <FormCadastro />
                <Link color="inherit" href="#" m={1}>
                  Você já possui conta? Vá para login.
                </Link>{" "}
                <Typography
                  variant="body2"
                  textAlign="center"
                  color="GrayText"
                  paragraph
                >
                  Copyright © you website 2023{" "}
                </Typography>
              </Stack>
            </Container>
          </Box>
        </Grid>
      </Grid>
  );
}

export default Cadastro;
