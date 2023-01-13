import React, { createContext, useReducer, useContext } from "react";
import {
    placeItem, getNext, isInCoordinates, getAllCoordinates,
    getPredicate, hasNext, setAvailableInCoordinates,
    largestColorArea, getTileFromCords, calcScore
} from "../utils";

export const BoardContext = createContext();

const boardInit = [3, 3, 3, 3, 3, 3, 3, 3];
const initialState = {
    current: 0,
    grid: boardInit.map(() => [...boardInit]),
    next: getAllCoordinates(),
    lastPlay: null,
    beforeLastPlay: null,
    player: [28, 28], //nombre de billes restantes pour chacun
    hasNext: true,
    score: [0, 0],
    largestArea: [0, 0],
    names: ["player 1", "player 2"]
};

// EVENTS
export const PLACE_ITEM = "PLACE_ITEM";
export const SHOW_NEXT = "SHOW_NEXT";
export const SET_NAMES = "SET_NAMES";
export const GAME_END = "GAME_END";
export const NEXT = "NEXT";
export const INIT = "INIT";


// Reducer
export function boardReducer(state, action) {
    switch (action.type) {
        case PLACE_ITEM:
            const players = [...state.player];
            players[state.current]--;
            const cords = action.cords;
            return {
                ...state, grid: placeItem(state.current, cords, state.grid, state.next), beforeLastPlay: state.lastPlay,
                lastPlay: cords, current: (state.current === 1) ? 0 : 1, player: players
            };
        case SHOW_NEXT:
            const next = getNext(state.grid, state.lastPlay, getPredicate(getTileFromCords(state.lastPlay), getTileFromCords(state.beforeLastPlay)));
            return { ...state, next, hasNext: hasNext(next, state.player) };
        case SET_NAMES:
            return { ...state, names: action.names };
        case NEXT:
            return { ...state, grid: setAvailableInCoordinates(state.grid, state.next) };
        case GAME_END:
            console.log("hello ---", largestColorArea(state.grid, 2));
            return {
                ...state, score: calcScore(state.grid),
                largestArea: [largestColorArea(state.grid, 1), largestColorArea(state.grid, 2)]
            };
        case INIT:
            return { ...initialState, names: state.names };
        default:
            return state;
    }
}

function BoardProvider(props) {
    const [store, dispatch] = useReducer(boardReducer, initialState);

    const storeData = { store, dispatch };

    return <BoardContext.Provider value={storeData} {...props} />;
}

function useBoardContext() {
    return useContext(BoardContext);
}

export { BoardProvider, useBoardContext, isInCoordinates };