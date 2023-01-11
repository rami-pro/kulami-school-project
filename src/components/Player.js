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


function PlayerCompo({ player, ...props }) {
    console.log("player", player);
    return (
        <PlayerStack className={classes.root} alignItems="center" {...props}>
            <Toolbar disableGutters sx={{ backgroundColor: "rgb(90, 90, 90)", pl: 1, mt: 2 }}>
                <AdbIcon sx={{ display: 'flex', mr: 1, color: '#fefefe' }} />
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
                        color: '#fefefe',
                        textDecoration: 'none',
                    }}
                >
                    {player?.toUpperCase() ?? "PLAYER"}
                </Typography>
            </Toolbar>
        </PlayerStack>
    );
}

export default PlayerCompo;