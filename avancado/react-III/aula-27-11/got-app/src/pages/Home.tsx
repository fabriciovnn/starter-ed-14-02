import { Box } from "@mui/material";
import { useEffect } from "react";
import MeuAppBar from "../components/AppBar";
import ListCharacters from "../components/ListCharacters";
import { useAppDispatch } from "../store/hooks";
import { listCharacters } from "../store/modules/characters/actions";

function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(listCharacters());
  }, [dispatch]);
  return (
    <Box component="main" height="100%" width="100vw" bgcolor="#938170">
      <MeuAppBar />
      <ListCharacters />
    </Box>
  );
}

export default Home;
