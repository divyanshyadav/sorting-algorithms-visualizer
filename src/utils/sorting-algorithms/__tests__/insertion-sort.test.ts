import insertionSort from '../insertion-sort'

test('case 0', () => {
    const input: Array<number> = []
    const expected = [[]]
    expect(insertionSort(input)).toEqual(expected)
})

test('case 1', () => {
    const input = [3, 2, 1]
    const expected = [
        [3, 2, 1],
        [2, 3, 1],
        [2, 1, 3],
        [1, 2, 3]
    ]
    expect(insertionSort(input)).toEqual(expected)
})