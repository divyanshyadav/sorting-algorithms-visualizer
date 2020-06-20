export function randomNumbersArray({ length, min = 1, max = 100 }: { length: number, min?: number, max?: number}) {
    const numbers: Array<number> = []

    for (let i = 0; i < length; i++) {
        numbers.push(Math.floor(min + Math.random() * max))
    }

    return numbers
}
