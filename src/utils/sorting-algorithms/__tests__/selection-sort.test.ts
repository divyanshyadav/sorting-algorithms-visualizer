import selectionSort from '../selection-sort';

test('case 1', () => {
    const input = [4, 3, 2, 1]
    const actual: Array<Array <number>> = []

    selectionSort(input, (arr: Array<number>) => {
        actual.push(arr.slice())
    });

    const expected = [
        [ 4, 3, 2, 1 ],
        [ 1, 3, 2, 4 ],
        [ 1, 3, 2, 4 ],
        [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 4 ]
    ]

    expect(actual).toEqual(expected)
})