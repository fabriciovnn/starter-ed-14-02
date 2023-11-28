import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../store/hooks";

function ListCharacters() {
  const state = useAppSelector((state) => state.characters);
  return (
    <Container maxWidth="md">
      <Grid container paddingY={2} spacing={2}>
        {state.map((c, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="stretch"
          >
            <Card
              sx={{ width: "100%", backgroundColor: "#d8d8d8" }}
              elevation={10}
            >
              <CardMedia sx={{ pt: "100%" }} image={c.imageUrl} />
              <CardContent
                sx={{
                  pt: "5%",
                }}
              >
                <Typography
                  gutterBottom
                  fontSize={14}
                  fontWeight="bold"
                  color="#000"
                >
                  First Name: {c.firstName}
                </Typography>
                <Typography
                  gutterBottom
                  fontSize={14}
                  fontWeight="bold"
                  color="#000"
                >
                  Last Name: {c.lastName}
                </Typography>
                <Typography
                  gutterBottom
                  fontSize={14}
                  fontWeight="bold"
                  color="#000"
                >
                  Full Name: {c.fullName}
                </Typography>

                <Typography
                  gutterBottom
                  fontSize={16}
                  fontWeight="bold"
                  mt={3}
                  textAlign="center"
                  color="darkred"
                >
                  {c.title}
                </Typography>
                <Typography
                  gutterBottom
                  fontSize={14}
                  fontWeight="bold"
                  textAlign="center"
                  color="darkgoldenrod"
                >
                  Family: {c.family}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ListCharacters;
