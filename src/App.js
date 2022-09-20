import { useEffect, useState } from "react";
import Row from "./components/Row";
import Cell from "./components/Cell";
import "./app.css";

function App() {
  const boardInit = [2, 0, 0, 0, 0, 0, 0, 0];
  const [board, setBoard] = useState(boardInit.map(() => [...boardInit]));

  useEffect(() => {
    console.log("this is board", board);
    console.log("this is [0][1]", board[0][1])
  }, [board])
  return (
    <div className="App">
      <div className="container text-center">
        <Row>
          <Cell borderRTL bbottom bright value={board[0][0]} setValue={{setBoard, board, cords: {x: 0, y: 0}}} color={"green"}/>
          <Cell borderRTR bleft bbottom value={board[0][1]} setValue={{setBoard, board, cords: {x: 1, y: 0}}}/>
          <Cell borderRTL borderRTR bbottom value={board[0][2]} setValue={{setBoard, board, cords: {x: 2, y: 0}}}/>
          <Cell borderRTL borderRBL bright value={board[0][3]} setValue={{setBoard, board, cords: {x: 3, y: 0}}}/>
          <Cell bleft bright value={board[0][4]} setValue={{setBoard, board, cords: {x: 4, y: 0}}}/>
          <Cell borderRTR borderRBR bleft value={board[0][5]} setValue={{setBoard, board, cords: {x: 5, y: 0}}}/>
          <Cell borderRTL bbottom bright value={board[0][6]} setValue={{setBoard, board, cords: {x: 6, y: 0}}}/>
          <Cell borderRTR bleft bbottom value={board[0][7]} setValue={{setBoard, board, cords: {x: 7, y: 0}}}/>
        </Row>
        <Row>
          <Cell borderRBL btop bright value={board[1][0]} setValue={{setBoard, board, cords: {x: 0, y: 1}}}/>
          <Cell borderRBR btop bleft value={board[1][1]} setValue={{setBoard, board, cords: {x: 1, y: 1}}}/>
          <Cell btop bbottom value={board[1][2]} setValue={{setBoard, board, cords: {x: 2, y: 1}}}/>
          <Cell borderRTL bbottom bright value={board[1][3]} setValue={{setBoard, board, cords: {x: 3, y: 1}}}/>
          <Cell borderRTR bbottom bleft value={board[1][4]} setValue={{setBoard, board, cords: {x: 4, y: 1}}}/>
          <Cell borderRTL borderRTR bbottom value={board[1][5]} setValue={{setBoard, board, cords: {x: 5, y: 1}}}/>
          <Cell bright btop bbottom value={board[1][6]} setValue={{setBoard, board, cords: {x: 6, y: 1}}}/>
          <Cell bleft btop bbottom value={board[1][7]} setValue={{setBoard, board, cords: {x: 7, y: 1}}}/>
        </Row>
        <Row>
          <Cell borderRTL bbottom bright value={board[2][0]} setValue={{setBoard, board, cords: {x: 0, y: 2}}}/>
          <Cell borderRTR bleft bbottom value={board[2][1]} setValue={{setBoard, board, cords: {x: 1, y: 2}}}/>
          <Cell borderRBL borderRBR btop value={board[2][2]} setValue={{setBoard, board, cords: {x: 2, y: 2}}}/>
          <Cell borderRBL btop bright value={board[2][3]} setValue={{setBoard, board, cords: {x: 3, y: 2}}}/>
          <Cell borderRBR btop bleft value={board[2][4]} setValue={{setBoard, board, cords: {x: 4, y: 2}}}/>
          <Cell borderRBL borderRBR btop value={board[2][5]} setValue={{setBoard, board, cords: {x: 5, y: 2}}}/>
          <Cell borderRBL bright btop value={board[2][6]} setValue={{setBoard, board, cords: {x: 6, y: 2}}}/>
          <Cell borderRBR bleft btop value={board[2][7]} setValue={{setBoard, board, cords: {x: 7, y: 2}}}/>
        </Row>
        <Row>
          <Cell borderRBL btop bright value={board[3][0]} setValue={{setBoard, board, cords: {x: 0, y: 3}}}/>
          <Cell borderRBR btop bleft value={board[3][1]} setValue={{setBoard, board, cords: {x: 1, y: 3}}}/>
          <Cell borderRTL bright bbottom value={board[3][2]} setValue={{setBoard, board, cords: {x: 2, y: 3}}}/>
          <Cell bright bleft bbottom value={board[3][3]} setValue={{setBoard, board, cords: {x: 3, y: 3}}}/>
          <Cell borderRTR bleft bbottom value={board[3][4]} setValue={{setBoard, board, cords: {x: 4, y: 3}}}/>
          <Cell borderRTL borderRBL bright value={board[3][5]} setValue={{setBoard, board, cords: {x: 5, y: 3}}}/>
          <Cell bleft bright value={board[3][6]} setValue={{setBoard, board, cords: {x: 6, y: 3}}}/>
          <Cell borderRTR borderRBR bleft value={board[3][7]} setValue={{setBoard, board, cords: {x: 7, y: 3}}}/>
        </Row>
        <Row>
          <Cell borderRTL borderRBL bright value={board[4][0]} setValue={{setBoard, board, cords: {x: 0, y: 4}}}/>
          <Cell borderRTR borderRBR bleft value={board[4][1]} setValue={{setBoard, board, cords: {x: 1, y: 4}}}/>
          <Cell borderRBL bright btop value={board[4][2]} setValue={{setBoard, board, cords: {x: 2, y: 4}}}/>
          <Cell bright bleft btop value={board[4][3]} setValue={{setBoard, board, cords: {x: 3, y: 4}}}/>
          <Cell borderRBR bleft btop value={board[4][4]} setValue={{setBoard, board, cords: {x: 4, y: 4}}}/>
          <Cell borderRTL bbottom bright value={board[4][5]} setValue={{setBoard, board, cords: {x: 5, y: 4}}}/>
          <Cell borderRTR bleft bbottom value={board[4][6]} setValue={{setBoard, board, cords: {x: 6, y: 4}}}/>
          <Cell borderRTL borderRTR bbottom value={board[4][7]} setValue={{setBoard, board, cords: {x: 7, y: 4}}}/>
        </Row>
        <Row>
          <Cell borderRTL borderRTR bbottom value={board[5][0]} setValue={{setBoard, board, cords: {x: 0, y: 5}}}/>
          <Cell borderRTL bbottom bright value={board[5][1]} setValue={{setBoard, board, cords: {x: 1, y: 5}}}/>
          <Cell borderRTR bleft bbottom value={board[5][2]} setValue={{setBoard, board, cords: {x: 2, y: 5}}}/>
          <Cell borderRTL borderRBL bright value={board[5][3]} setValue={{setBoard, board, cords: {x: 3, y: 5}}}/>
          <Cell borderRTR borderRBR bleft value={board[5][4]} setValue={{setBoard, board, cords: {x: 4, y: 5}}}/>
          <Cell borderRBL btop bright value={board[5][5]} setValue={{setBoard, board, cords: {x: 5, y: 5}}}/>
          <Cell borderRBR btop bleft value={board[5][6]} setValue={{setBoard, board, cords: {x: 6, y: 5}}}/>
          <Cell borderRBL borderRBR btop value={board[5][7]} setValue={{setBoard, board, cords: {x: 7, y: 5}}}/>
        </Row>
        <Row>
          <Cell btop bbottom value={board[6][0]} setValue={{setBoard, board, cords: {x: 0, y: 6}}}/>
          <Cell bright btop bbottom value={board[6][1]} setValue={{setBoard, board, cords: {x: 1, y: 6}}}/>
          <Cell bleft btop bbottom value={board[6][2]} setValue={{setBoard, board, cords: {x: 2, y: 6}}}/>
          <Cell borderRTL bright bbottom value={board[6][3]} setValue={{setBoard, board, cords: {x: 3, y: 6}}}/>
          <Cell bright bleft bbottom value={board[6][4]} setValue={{setBoard, board, cords: {x: 4, y: 6}}}/>
          <Cell borderRTR bleft bbottom value={board[6][5]} setValue={{setBoard, board, cords: {x: 5, y: 6}}}/>
          <Cell borderRTL bbottom bright value={board[6][6]} setValue={{setBoard, board, cords: {x: 6, y: 6}}}/>
          <Cell borderRTR bleft bbottom value={board[6][7]} setValue={{setBoard, board, cords: {x: 7, y: 6}}}/>
        </Row>
        <Row>
          <Cell borderRBL borderRBR btop value={board[7][0]} setValue={{setBoard, board, cords: {x: 0, y: 7}}}/>
          <Cell borderRBL btop bright value={board[7][1]} setValue={{setBoard, board, cords: {x: 1, y: 7}}}/>
          <Cell borderRBR btop bleft value={board[7][2]} setValue={{setBoard, board, cords: {x: 2, y: 7}}}/>
          <Cell borderRBL bright btop value={board[7][3]} setValue={{setBoard, board, cords: {x: 3, y: 7}}}/>
          <Cell bright bleft btop value={board[7][4]} setValue={{setBoard, board, cords: {x: 4, y: 7}}}/>
          <Cell borderRBR bleft btop value={board[7][5]} setValue={{setBoard, board, cords: {x: 5, y: 7}}}/>
          <Cell borderRBL btop bright value={board[7][6]} setValue={{setBoard, board, cords: {x: 6, y: 7}}}/>
          <Cell borderRBR btop bleft value={board[7][7]} setValue={{setBoard, board, cords: {x: 7, y: 7}}}/>
        </Row>
      </div>
    </div>
  );
}

export default App;
