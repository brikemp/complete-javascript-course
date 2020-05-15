function strokesRequired(picture) {
    let strokes = 0;
    if (!picture) return strokes;

    let visited = []
    for (let r = 0; r < picture.length; r++) {
        let internalArray = [];
        for (let c = 0; c < picture[0].length; c++) {
            internalArray.push(false)

        }
        visited.push(internalArray)
    }

    const fillAdj = (r, c, prevr = r, prevc = c) => {
        if (r >= picture.length || r < 0 || c >= picture[0].length || c < 0) return null;
        if (visited[r][c] !== false) return null
    
        if (picture[r][c] !== picture[prevr][prevc] ) return null
        visited[r][c] = strokes
    
        fillAdj(r + 1, c, r, c);
        fillAdj(r - 1, c, r, c);
        fillAdj(r, c + 1, r, c);
        fillAdj(r, c - 1, r, c);
    }

    for (let r = 0; r < picture.length; r++) {
        for (let c = 0; c < picture[0].length; c++) {
            if (visited[r][c] === false) {
                fillAdj(r, c)
                strokes++;
            }
        }
    }

    return [strokes, visited]
}

console.log(strokesRequired(["aabba", "aabba", "aaacb"]))
console.log(strokesRequired(["aaaba", "ababa", "aaaca"]))
console.log(strokesRequired(["bbba", "abba", "acaa", "aaac"]))