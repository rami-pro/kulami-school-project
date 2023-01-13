//calcul score final => [score 1, score 2];
export function calcScore(matrix) {
    const player = [0, 0];
    const areaPlayer = [largestColorArea(matrix, 1), largestColorArea(matrix, 2)];

    if (areaPlayer[0] > areaPlayer[1]) {
        player[0] += areaPlayer[0] - areaPlayer[1];
    } else {
        player[1] += areaPlayer[1] - areaPlayer[0];
    }

    for (let i = 0; i < 17; i++) {
        const { player: num, score } = calcScoreFromTile(i, matrix);
        player[num] += score;
    }

    return player;
}

export function largestColorArea(matrix, color) {
    let area = 0;
    let visited = new Set();
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (matrix[i][j] === color && !visited.has(i + "," + j)) {
                let tempArea = dfs(matrix, i, j, color, visited);
                area = Math.max(area, tempArea);
            }
        }
    }
    return area;
}

export function dfs(matrix, i, j, color, visited) {
    if (i < 0 || i >= 8 || j < 0 || j >= 8) return 0;
    if (matrix[i][j] !== color || visited.has(i + "," + j)) return 0;
    visited.add(i + "," + j);
    let area = 1;
    area += dfs(matrix, i + 1, j, color, visited);
    area += dfs(matrix, i - 1, j, color, visited);
    area += dfs(matrix, i, j + 1, color, visited);
    area += dfs(matrix, i, j - 1, color, visited);
    return area;
}


// { player, score } player qui a gagné et le score qu'il a
export function calcScoreFromTile(tile, matrix) {
    const coords = getCordsFromTile(tile); // [[x, y], [x, y]...]
    const playerScore = [0, 0];


    //case rouge <==> value == 1 <==> player 1
    //case verte <==> value == 2 <==> player 2

    coords.forEach(e => {
        const [x, y] = e;
        const value = matrix[x][y];
        switch (value) {
            case 1:
                playerScore[0]++;
                break;
            case 2:
                playerScore[1]++;
                break;
            default:
                break;
        }
    });

    return {
        player: playerScore[0] > playerScore[1] ? 0 : 1,
        score: playerScore[0] === playerScore[1] ? 0 : coords.length
    }
}

//pour update la matrice carré et que l'app puisse se mettre à jour
export function clone2DArray(arr) {
    return arr.map(innerArray => innerArray.slice());
}

//mettre à jour les points sur les quels on peut jouer
export function setAvailableInCoordinates(matrix, coordinates) {
    const newArray = matrix.map((row, i) => row.map((cell, j) => {
        const point = [i, j];
        return coordinates.some(([x, y]) => x === point[0] && y === point[1]) ? 3 : cell === 3 ? 0 : cell;
    }));
    return clone2DArray(newArray);

}

//pour initialiser next;
export function getAllCoordinates() {
    const coordinates = [];
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            coordinates.push([x, y]);
        }
    }
    return coordinates;
}


export function placeItem(player, cords, matrix, next) {
    console.log("player--", player)
    const updatedMatrix = matrix.map(row => row.slice());
    if (isInCoordinates(cords, next)) {
        console.log("player--inside", player)
        console.log("player--next", next)
        const [x, y] = cords;
        updatedMatrix[x][y] = player + 1;
        return updatedMatrix;
    }

    return matrix;
}


export function isInCoordinates(point, coordinates) {
    return coordinates.some(([x, y]) => x === point[0] && y === point[1]);
}


export function getPredicate(...tiles) {
    const tileNumber = tiles.reduce((acc, cur) => {
        if (cur === null) {
            return acc;
        }
        return [...acc, ...getCordsFromTile(cur)];
    }, []);

    return ([x, y]) => {
        return !tileNumber.some(e => e[0] === x && e[1] === y);
    }
}

export function hasNext(next, ballsLeft) {
    if ((ballsLeft[0] === 0 && ballsLeft[1] === 0) || next.length === 0) {
        return false
    }
    return true;
}

export function getNext(matrix, point, predicate) {
    const [x, y] = point;
    const horizontalCoordinates = matrix[x].reduce((coordinates, val, i) => {
        console.log("loop", [i, y], predicate([i, y]), matrix[i][y])
        if ((matrix[i][y] === 0 || matrix[i][y] === 3) && predicate([i, y])) {
            coordinates.push([i, y]);
        }
        return coordinates;
    }, []);

    const verticalCoordinates = matrix.reduce((coordinates, row, i) => {
        console.log("loop", [x, i], predicate([x, i]))
        if ((matrix[x][i] === 0 || matrix[x][i] === 3) && predicate([x, i])) {
            coordinates.push([x, i]);
        }
        return coordinates;
    }, []);

    return [...horizontalCoordinates, ...verticalCoordinates];
}


export function getTileFromCords(cord) {
    const reverseLookup = {
        '0,0': 0, '0,1': 0, '1,0': 0, '1,1': 0,
        '2,0': 1, '2,1': 1, '2,2': 1,
        '3,0': 2, '4,0': 2, '5,0': 2,
        '6,0': 3, '6,1': 3, '6,2': 3, '7,0': 3, '7,1': 3, '7,2': 3,
        '4,1': 4, '4,2': 4, '3,1': 4, '3,2': 4,
        '5,1': 5, '5,2': 5,
        '0,2': 6, '0,3': 6, '1,2': 6, '1,3': 6,
        '2,3': 7, '3,3': 7, '4,3': 7, '2,4': 7, '3,4': 7, '4,4': 7,
        '5,3': 8, '6,3': 8, '7,3': 8,
        '0,4': 9, '1,4': 9,
        '5,4': 10, '5,5': 10, '6,4': 10, '6,5': 10,
        '7,4': 11, '7,5': 11,
        '0,5': 12, '0,6': 12, '0,7': 12,
        '1,5': 13, '1,6': 13, '1,7': 13, '2,5': 13, '2,6': 13, '2,7': 13,
        '3,5': 14, '4,5': 14,
        '3,6': 15, '3,7': 15, '4,6': 15, '4,7': 15, '5,6': 15, '5,7': 15,
        '6,6': 16, '6,7': 16, '7,6': 16, '7,7': 16
    };
    let cordString = cord ? cord.join(',') : "";

    if (reverseLookup[cordString] === 0) {
        return 0;
    }
    return reverseLookup[cordString] || -1;
}


export function getCordsFromTile(tile) {
    switch (tile) {
        case 0:
            return [[0, 0], [0, 1], [1, 0], [1, 1]];
        case 1:
            return [[2, 0], [2, 1], [2, 2]];
        case 2:
            return [[3, 0], [4, 0], [5, 0]];
        case 3:
            return [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2]];
        case 4:
            return [[4, 1], [4, 2], [3, 1], [3, 2]];
        case 5:
            return [[5, 1], [5, 2]];
        case 6:
            return [[0, 2], [0, 3], [1, 2], [1, 3]];
        case 7:
            return [[2, 3], [3, 3], [4, 3], [2, 4], [3, 4], [4, 4]];
        case 8:
            return [[5, 3], [6, 3], [7, 3]];
        case 9:
            return [[0, 4], [1, 4]];
        case 10:
            return [[5, 4], [5, 5], [6, 4], [6, 5]];
        case 11:
            return [[7, 4], [7, 5]];
        case 12:
            return [[0, 5], [0, 6], [0, 7]];
        case 13:
            return [[1, 5], [1, 6], [1, 7], [2, 5], [2, 6], [2, 7]];
        case 14:
            return [[3, 5], [4, 5]];
        case 15:
            return [[3, 6], [3, 7], [4, 6], [4, 7], [5, 6], [5, 7]];
        case 16:
            return [[6, 6], [6, 7], [7, 6], [7, 7]];
        default:
            return [];
    }
}