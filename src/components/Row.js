import { Stack } from "@mui/material";

function Row(props) {
    return (
        <Stack className="row" direction={"row"} {...props} />
    );
}

export default Row;