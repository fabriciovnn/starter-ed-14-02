import Security from "@mui/icons-material/Security";
import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

function MeuAppBar() {
  return (
    <AppBar position="static" sx={{ py: 3, backgroundColor: "#c38d5f" }}>
      <Stack justifyContent="center" alignItems="center" direction="row">
        <Typography
          variant="h3"
          component="h1"
          color="#331c0e"
          fontWeight="bold"
        >
          Game Of Thrones API
        </Typography>
        <Security sx={{ color: "#331c0e", fontSize: 50, mb: 1 }} />
      </Stack>
    </AppBar>
  );
}

export default MeuAppBar;
