import { createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import Board from "./components/Board";
import NavBar from "./components/NavBar";
import Infos from "./components/Infos";
import PlayerCompo from "./components/Player";
import BasicModal from "./components/Modal";
import { WinModal } from "./components/WinModal";
import { useBoardContext } from "./components/StoreProvider";
import "./App.css";

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
  const { store: { current, names } } = useBoardContext();

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Stack className="App">
          <NavBar />
          <Stack direction="row">
            <Board />
            <Infos>
              <PlayerCompo playerName={names[0] || "player 1"} dark={"dark"} player={0} current={current} />
              <PlayerCompo playerName={names[1] || "player 2"} player={1} current={current} />
            </Infos>
          </Stack>
        </Stack>
        <BasicModal />
        <WinModal />
      </ThemeProvider>
    </>
  );
}

export default App;
