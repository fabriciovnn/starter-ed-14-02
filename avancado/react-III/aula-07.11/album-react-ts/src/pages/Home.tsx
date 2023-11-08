import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Stack,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import {
  CameraAltRounded,
  RemoveRedEyeRounded,
  FavoriteBorderRounded,
  FavoriteRounded,
} from "@mui/icons-material";
import { dados } from "../data";

function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <CameraAltRounded sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ paddingY: 8 }}>
        <Box sx={{ pt: 8, pb: 6 }}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              component="h1"
              textAlign="center"
              noWrap
              marginBottom={2}
            >
              Album layout
            </Typography>

            <Typography
              variant="h5"
              textAlign="center"
              color="GrayText"
              paragraph
              marginBottom={3}
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don't simply skip over it entirely.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              paddingTop={4}
            >
              <Button variant="contained" size="large">
                main call to action
              </Button>
              <Button variant="outlined" size="large">
                secondary action
              </Button>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="md">
          <Grid container spacing={4}>
            {dados.map((item) => {
              return (
                <Grid key={item.id} item xs={12} sm={6} md={4}>
                  <Card sx={{ width: "100%" }} elevation={10}>
                    <CardMedia
                      sx={{ pt: "56.25%" }}
                      image={item.imagem}
                      title="imagem wallpaper card"
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="GrayText">
                        {item.content}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <IconButton aria-label="Learn More">
                        <RemoveRedEyeRounded color="primary" />
                      </IconButton>
                      <IconButton aria-label="Favorite">
                        {item.favorite ? (
                          <FavoriteRounded color="error" />
                        ) : (
                          <FavoriteBorderRounded color="error" />
                        )}
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      {/* Aqui abaixo o footer*/}
    </>
  );
}

export default Home;
