interface randomNumbersArrayProps { 
    length: number, 
    min?: number, 
}

export function randomNumbersArray({ length, min = 1 }: randomNumbersArrayProps ) {
    const numbers: Array<number> = []

    for (let i = 0; i < length; i++) {
        numbers.push(Math.floor(min + Math.random() * length))
    }

    return numbers
}
