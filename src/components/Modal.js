import { useRef, useState } from 'react';
import { Typography, Stack, Button, Box, Modal, TextField, InputAdornment, styled } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { SET_NAMES, useBoardContext } from './StoreProvider';

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

const options = {
    shouldForwardProp: (prop) => prop !== 'fontColor',
};
const StyledTextField = styled(
    TextField,
    options,
)(({ fontColor }) => ({
    input: {
        color: fontColor,
    },
}));

export default function BasicModal() {
    const [open, setOpen] = useState(true);
    const { dispatch } = useBoardContext();
    const refPLayer1 = useRef();
    const refPLayer2 = useRef();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSave = () => {
        const p1 = refPLayer1.current.value || "player 1";
        const p2 = refPLayer2.current.value || "player 2";

        dispatch({ type: SET_NAMES, names: [p1, p2] });
        setOpen(false);
    }



    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ minWidth: "600px" }}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2" sx={{ fontWeight: "600" }}>
                        Customize your names !
                    </Typography>
                    <Stack spacing={2} alignItems={"center"} sx={{ mt: 4 }}>
                        <StyledTextField
                            inputRef={refPLayer1}
                            fontColor="white"
                            label="Player 1"
                            variant="standard"
                            color="warning"
                            sx={{ width: "300px" }}
                            focused
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" >
                                        <AccountCircle sx={{ zIndex: 1000 }} color='warning' />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <StyledTextField
                            inputRef={refPLayer2}
                            fontColor="white"
                            label="Player 2"
                            variant="standard"
                            color="warning"
                            sx={{ width: "300px" }}
                            focused
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" >
                                        <AccountCircle sx={{ zIndex: 1000 }} color='warning' />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Stack>
                    <Stack spacing={2} direction="row" justifyContent={"flex-end"} sx={{ mt: 10 }}>
                        <Button variant="contained" onClick={onSave}>Save & Start playing !</Button>
                        <Button variant="outlined" sx={{ color: "yellow", borderColor: "yellow" }} onClick={() => setOpen(prev => !prev)}>Exit</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}