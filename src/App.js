import { useEffect, useState } from "react";
import "./app.css";
import { createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import Board from "./components/Board";
import NavBar from "./components/NavBar";
import Infos from "./components/Infos";
import PlayerCompo from "./components/Player";
import BasicModal from "./components/Modal";
import { BoardProvider } from "./components/StoreProvider";

const theme = createTheme({
  palette: {
    primary: {
      main: '#8338ec',
    },
    secondary: {
      main: '#ffbe0b',
    },
  },
});

function App() {

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BoardProvider>
          <Stack className="App">
            <NavBar />
            <Stack direction="row">
              <Board />
              <Infos>
                <PlayerCompo player={"player 1"} dark={"dark"} />
                <PlayerCompo player={"player 2"} />
              </Infos>
            </Stack>
          </Stack>
          <BasicModal />
        </BoardProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
