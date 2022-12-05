import { useEffect, useState } from "react";
import "./app.css";
import { createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import Board from "./components/Board";
import NavBar from "./components/NavBar";
import Infos from "./components/Infos";
import PlayerCompo from "./components/Player";
import BasicModal from "./components/Modal";

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
  const boardInit = [0, 0, 0, 0, 0, 0, 0, 0];
  const [prevBoard, setPrevBoard] = useState(boardInit.map(() => [...boardInit]));
  const [board, setBoard] = useState(boardInit.map(() => [...boardInit]));
  const [user0, setUser0] = useState(true);

  // prev == current;
  // current == xxxyyy;
  // prev == update;
  // current ==

  // useEffect(() => {
  //   console.log("this is board", board);
  //   console.log("this is [0][1]", board[0][1])
  // }, [])
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
}

export default App;
