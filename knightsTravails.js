function knightMoves(start, stop) {
    var steps = [
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-1, 2],
        [1, 2],
        [2, 1],
        [-2, 1]
    ];
    var seen = new Set();
    var been = new Set();
    been.add(start);
    var q = [[0, start]];
    while (q.length > 0) {
        var _a = q.shift(), moves = _a[0], coords = _a[1];
        if (coords[0] === stop[0] && coords[1] === stop[1]) {
            return moves;
        }
        for (var i = 0; i < steps.length; i++) {
            var step = steps[i];
            var nxtc = [coords[0] + step[0], coords[1] + step[1]];
            if (!((nxtc[0] >= -2 && stop[0] >= -2 && nxtc[1] >= -2 && stop[1] >= -2)
                || (nxtc[0] <= 2 && stop[0] <= 2 && nxtc[1] <= 2 && stop[1] <= 2)
                || (nxtc[0] >= -2 && stop[0] >= -2 && nxtc[1] <= 2 && stop[1] <= 2)
                || (nxtc[0] <= 2 && stop[0] <= 2 && nxtc[1] >= -2 && stop[1] >= -2))) {
                continue;
            }
            if (!seen.has(nxtc)) {
                q.push([moves + 1, nxtc]);
                seen.add(nxtc);
            }
        }
    }
}
console.log(knightMoves([3, 3], [4, 3]));
