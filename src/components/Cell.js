import { useEffect, useState } from "react";

function Cell({value, setValue: {cords, board, setBoard}, ...props}) {
    const borderProps = ["borderRTL", "borderRTR", "borderRBL", "borderRBR", "btop", "bleft", "bright", "bbottom"];
    const cellColors = ["black", "red", "green"];
    const generateCellClassName = () => {
        return borderProps.reduce((acc, cur) => (`${acc + ((props[cur]) ? cur : "")} `), "cell ");
    }
    const generateDotClassName = (color = cellColors[value]) => {
        const baseClassName = "dot rounded-circle";
        if (!color) {
            return baseClassName;
        }

        return `${baseClassName} ${cellColors.includes(color) ? `dot-${color}` : ""}`;
    }
    const [cellClassName, setCellClassName] = useState(generateCellClassName());
    const [dotClassName, setDotClassName] = useState(generateDotClassName());

    const cloneArray = (arr = []) => {
        return arr.map(e => [...e]);
    } 
    const handleDotClick = ({x, y}, board) => {
        const clonedBoard = cloneArray(board);
        console.log("x, y", x, y);
        clonedBoard[y][x] = 2;
        setBoard([...clonedBoard]); 
    }

    useEffect(() => {
        console.log("cords.... ", cords)
        console.log("value.... ", value)
    }, [value])

    useEffect(() => {
        console.log(generateDotClassName("red"))
    }, [])

    return (
        <div className={cellClassName}>
            <div className={dotClassName}
                onMouseOver={() => setDotClassName(generateDotClassName("red"))}
                onMouseOut={() => setDotClassName(generateDotClassName())}
                onClick={() => handleDotClick(cords, board)}
            ></div>
        </div>
    );
}

export default Cell;