function swap(array: Array<any>, indexA: number, indexB: number) {
    const temp = array[indexA]
    array[indexA] = array[indexB]
    array[indexB] = temp
}

export default function insertionSort(array: Array<number>) {
    const results = [array.slice()]

    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if (array[j] < array[j - 1]) {
                swap(array, j, j - 1)
                results.push(array.slice())
            }
        }
    }

    return results
}