import { useEffect, useState } from "react";
import { useBoardContext, PLACE_ITEM, SHOW_NEXT, isInCoordinates, NEXT } from "./StoreProvider";

function Cell({ value, cords, ...props }) {
    const borderProps = ["borderRTL", "borderRTR", "borderRBL", "borderRBR", "btop", "bleft", "bright", "bbottom"];
    const cellColors = ["black", "red", "green", "blue"];
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

    const { dispatch, store } = useBoardContext();
    const { store: { grid: board, next } } = useBoardContext();

    useEffect(() => {
        console.log("this is store", board);
    }, [board]);

    const getValue = (value, cords) => {
        if (isInCoordinates(cords, next)) {
            return 3;
        }
        return value
    }


    useEffect(() => {
        console.log("store...", store)
        console.log("coords-value", cords, value);
    })

    return (
        <div className={cellClassName}>
            <div className={`${generateDotClassName()} ${value === 3 ? "cursor-allowed" : "cursor-not-allowed"}`}
                onMouseOver={() => setDotClassName(generateDotClassName("red"))}
                onMouseOut={() => setDotClassName(generateDotClassName())}
                onClick={() => {
                    if (value === 3) {
                        dispatch({ type: PLACE_ITEM, cords })
                        dispatch({ type: SHOW_NEXT })
                        dispatch({ type: NEXT })
                    }
                }}
            ></div>
        </div>
    );
}

export default Cell;