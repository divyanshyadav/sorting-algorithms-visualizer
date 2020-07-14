import insertionSort from '../insertion-sort'

test('case 1', () => {
    const input = [3, 2, 1]
    const actual: Array<Array <number>> = []

    insertionSort(input, (arr: Array<number>) => {
        actual.push(arr.slice())
    });

    const expected = [
        [ 3, 2, 1 ],
        [ 2, 3, 1 ],
        [ 2, 3, 1 ],
        [ 2, 1, 3 ],
        [ 2, 1, 3 ],
        [ 1, 2, 3 ]
    ]

    expect(actual).toEqual(expected)
})