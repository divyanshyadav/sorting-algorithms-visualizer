import insertionSort from '../selection-sort'

test('case 0', () => {
    const input: Array<number> = []
    const expected = [[]]
    expect(insertionSort(input)).toEqual(expected)
})

test('case 1', () => {
    const input = [4, 3, 2, 1]
    const expected = [
        [4, 3, 2, 1],
        [1, 3, 2, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4]
    ]
    expect(insertionSort(input)).toEqual(expected)
})