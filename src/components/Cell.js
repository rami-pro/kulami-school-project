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

    const { dispatch, store } = useBoardContext();
    const { store: { grid: board } } = useBoardContext();

    useEffect(() => {
        console.log("this is store", board);
    }, [board]);



    useEffect(() => {
        console.log("store...", store)
        console.log("coords-value", cords, value);
    })

    return (
        <div className={generateCellClassName()}>
            <div className={`${generateDotClassName()} ${value === 3 ? "cursor-allowed" : "cursor-not-allowed"}`}
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