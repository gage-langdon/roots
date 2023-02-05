export type Coord = {
    x: number,
    y: number
}

export const numbersToCoord = (x: number, y: number): Coord => {
    const newCord: Coord = { x: x, y: y }
    return newCord
}