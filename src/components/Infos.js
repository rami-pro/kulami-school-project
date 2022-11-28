import styled from "@emotion/styled";
import { Stack } from "@mui/material";

const PREFIX = "InfosStack";
export const classes = {
    root: `${PREFIX}-root`,
};

const Infos = styled(Stack)(({ theme }) => ({
    [`&.${classes.root}`]: {
        width: "40vw",
        backgroundColor: theme.palette.primary.light,
        height: "92vh"
    }
}));


function InfosCompo(props) {
    return (
        <Infos className={classes.root} {...props} />
    );
}

export default InfosCompo;