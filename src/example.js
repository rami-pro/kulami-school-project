import { useEffect, useState } from "react";

function Example(props) {
    const { msg } = props;
    return (
        <div style={{ height: "300px", width: "300px", backgroundColor: "black" }}>
            <div>
                {msg}
            </div>
        </div>
    );
}

export default Example;