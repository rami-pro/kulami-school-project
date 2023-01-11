import { useEffect } from "react";
import { Stack } from "@mui/material";
import Cell from "./Cell";
import Row from "./Row";
import { useBoardContext, GAME_END } from "./StoreProvider";

function Board() {
    const { store: { grid: board, hasNext }, dispatch } = useBoardContext();


    useEffect(() => {
        if (!hasNext) {
            dispatch({ type: GAME_END });
        }
    }, [hasNext])

    return (
        <Stack className="container text-center" justifyContent={"center"} alignItems="center">
            <Row>
                <Cell borderRTL bbottom bright value={board[0][0]} cords={[0, 0]} />
                <Cell borderRTR bleft bbottom value={board[1][0]} cords={[1, 0]} />
                <Cell borderRTL borderRTR bbottom value={board[2][0]} cords={[2, 0]} />
                <Cell borderRTL borderRBL bright value={board[3][0]} cords={[3, 0]} />
                <Cell bleft bright value={board[4][0]} cords={[4, 0]} />
                <Cell borderRTR borderRBR bleft value={board[5][0]} cords={[5, 0]} />
                <Cell borderRTL bbottom bright value={board[6][0]} cords={[6, 0]} />
                <Cell borderRTR bleft bbottom value={board[7][0]} cords={[7, 0]} />
            </Row>
            <Row>
                <Cell borderRBL btop bright value={board[0][1]} cords={[0, 1]} />
                <Cell borderRBR btop bleft value={board[1][1]} cords={[1, 1]} />
                <Cell btop bbottom value={board[2][1]} cords={[2, 1]} />
                <Cell borderRTL bbottom bright value={board[3][1]} cords={[3, 1]} />
                <Cell borderRTR bbottom bleft value={board[4][1]} cords={[4, 1]} />
                <Cell borderRTL borderRTR bbottom value={board[5][1]} cords={[5, 1]} />
                <Cell bright btop bbottom value={board[6][1]} cords={[6, 1]} />
                <Cell bleft btop bbottom value={board[7][1]} cords={[7, 1]} />
            </Row>
            <Row>
                <Cell borderRTL bbottom bright value={board[0][2]} cords={[0, 2]} />
                <Cell borderRTR bleft bbottom value={board[1][2]} cords={[1, 2]} />
                <Cell borderRBL borderRBR btop value={board[2][2]} cords={[2, 2]} />
                <Cell borderRBL btop bright value={board[3][2]} cords={[3, 2]} />
                <Cell borderRBR btop bleft value={board[4][2]} cords={[4, 2]} />
                <Cell borderRBL borderRBR btop value={board[5][2]} cords={[5, 2]} />
                <Cell borderRBL bright btop value={board[6][2]} cords={[6, 2]} />
                <Cell borderRBR bleft btop value={board[7][2]} cords={[7, 2]} />
            </Row>
            <Row>
                <Cell borderRBL btop bright value={board[0][3]} cords={[0, 3]} />
                <Cell borderRBR btop bleft value={board[1][3]} cords={[1, 3]} />
                <Cell borderRTL bright bbottom value={board[2][3]} cords={[2, 3]} />
                <Cell bright bleft bbottom value={board[3][3]} cords={[3, 3]} />
                <Cell borderRTR bleft bbottom value={board[4][3]} cords={[4, 3]} />
                <Cell borderRTL borderRBL bright value={board[5][3]} cords={[5, 3]} />
                <Cell bleft bright value={board[6][3]} cords={[6, 3]} />
                <Cell borderRTR borderRBR bleft value={board[7][3]} cords={[7, 3]} />
            </Row>
            <Row>
                <Cell borderRTL borderRBL bright value={board[0][4]} cords={[0, 4]} />
                <Cell borderRTR borderRBR bleft value={board[1][4]} cords={[1, 4]} />
                <Cell borderRBL bright btop value={board[2][4]} cords={[2, 4]} />
                <Cell bright bleft btop value={board[3][4]} cords={[3, 4]} />
                <Cell borderRBR bleft btop value={board[4][4]} cords={[4, 4]} />
                <Cell borderRTL bbottom bright value={board[5][4]} cords={[5, 4]} />
                <Cell borderRTR bleft bbottom value={board[6][4]} cords={[6, 4]} />
                <Cell borderRTL borderRTR bbottom value={board[7][4]} cords={[7, 4]} />
            </Row>
            <Row>
                <Cell borderRTL borderRTR bbottom value={board[0][5]} cords={[0, 5]} />
                <Cell borderRTL bbottom bright value={board[1][5]} cords={[1, 5]} />
                <Cell borderRTR bleft bbottom value={board[2][5]} cords={[2, 5]} />
                <Cell borderRTL borderRBL bright value={board[3][5]} cords={[3, 5]} />
                <Cell borderRTR borderRBR bleft value={board[4][5]} cords={[4, 5]} />
                <Cell borderRBL btop bright value={board[5][5]} cords={[5, 5]} />
                <Cell borderRBR btop bleft value={board[6][5]} cords={[6, 5]} />
                <Cell borderRBL borderRBR btop value={board[7][5]} cords={[7, 5]} />
            </Row>
            <Row>
                <Cell btop bbottom value={board[0][6]} cords={[0, 6]} />
                <Cell bright btop bbottom value={board[1][6]} cords={[1, 6]} />
                <Cell bleft btop bbottom value={board[2][6]} cords={[2, 6]} />
                <Cell borderRTL bright bbottom value={board[3][6]} cords={[3, 6]} />
                <Cell bright bleft bbottom value={board[4][6]} cords={[4, 6]} />
                <Cell borderRTR bleft bbottom value={board[5][6]} cords={[5, 6]} />
                <Cell borderRTL bbottom bright value={board[6][6]} cords={[6, 6]} />
                <Cell borderRTR bleft bbottom value={board[7][6]} cords={[7, 6]} />
            </Row>
            <Row>
                <Cell borderRBL borderRBR btop value={board[0][7]} cords={[0, 7]} />
                <Cell borderRBL btop bright value={board[1][7]} cords={[1, 7]} />
                <Cell borderRBR btop bleft value={board[2][7]} cords={[2, 7]} />
                <Cell borderRBL bright btop value={board[3][7]} cords={[3, 7]} />
                <Cell bright bleft btop value={board[4][7]} cords={[4, 7]} />
                <Cell borderRBR bleft btop value={board[5][7]} cords={[5, 7]} />
                <Cell borderRBL btop bright value={board[6][7]} cords={[6, 7]} />
                <Cell borderRBR btop bleft value={board[7][7]} cords={[7, 7]} />
            </Row>
        </Stack>
    );
}

export default Board;
