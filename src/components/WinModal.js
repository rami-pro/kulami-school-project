import { Typography, Stack, Button, Box, Modal } from '@mui/material';
import { INIT, useBoardContext } from './StoreProvider';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #222',
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
    color: "white",
    backgroundColor: "rgb(90, 90, 90)"
};

export function WinModal() {
    const { store: { score, names, hasNext }, dispatch } = useBoardContext();
    const winner = score[0] > score[1] ? 0 : 1;


    return (
        <div>
            <Modal
                open={!hasNext}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ minWidth: "600px" }}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2" sx={{ fontWeight: "600" }}>
                        Congrats {names[winner]}, you won with a score of {score[winner]}! 🥳
                    </Typography>

                    <Stack spacing={2} direction="row" justifyContent={"flex-end"} sx={{ mt: 10 }}>
                        <Button variant="contained" onClick={() => dispatch({ type: INIT })}>Save & Start playing !</Button>
                        <Button variant="outlined" sx={{ color: "yellow", borderColor: "yellow" }}>Exit</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}