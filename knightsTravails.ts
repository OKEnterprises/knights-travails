type Coord = [number, number];
type QueueItem = [number, Coord];

function knightMoves(start: Coord, stop: Coord): number | undefined {
    const steps: Coord[] = [
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-1, 2],
        [1, 2],
        [2, 1],
        [-2, 1]
    ];

    const seen: Set<Coord> = new Set();

    const been: Set<Coord> = new Set();
    been.add(start);

    const q: QueueItem[] = [[0, start]]

    while (q.length > 0) {
        let [moves, coords] = q.shift()!;

        if (coords[0] === stop[0] && coords[1] === stop[1]) {
            return moves;
        }

        for (let i = 0; i < steps.length; i++) {
            const step = steps[i];
            const nxtc: Coord = [coords[0] + step[0], coords[1] + step[1]];
 
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

console.log(knightMoves([3,3],[4,3]));