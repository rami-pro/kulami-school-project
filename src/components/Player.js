import styled from "@emotion/styled";
import { Stack, Toolbar, Typography } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';

const PREFIX = "playerStack";
export const classes = {
    root: `${PREFIX}-root`,
};

const PlayerStack = styled(Stack)(({ theme, dark }) => {
    return ({
        [`&.${classes.root}`]: {
            backgroundColor: dark ? theme.palette.secondary.dark : theme.palette.secondary.main,
            height: "46vh"
        }
    })
});


function PlayerCompo({ playerName, player, current, ...props }) {
    const iconColor = ["rgba(255, 63, 63, 0.856)", "rgba(81, 255, 1, 0.85)"];

    return (
        <PlayerStack className={classes.root} alignItems="center" {...props}>
            <Toolbar disableGutters
                sx={{
                    backgroundColor: iconColor[player],
                    pl: 1, mt: 2, border: `4px solid ${player !== current ? "black" : "white"}`,
                    color: `${player !== current ? "black" : "white"}`,
                    borderRadius: "10px"
                }}>
                <AdbIcon sx={{ display: 'flex', mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="h3"
                    sx={{
                        mr: 2,
                        display: 'flex',
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    {playerName?.toUpperCase() ?? "PLAYER"}
                </Typography>
            </Toolbar>
        </PlayerStack>
    );
}

export default PlayerCompo;