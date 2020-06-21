export default function insertionSort(array: Array<number>) {
    const results = [array.slice()]

    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if (array[j] < array[j - 1]) {
                const temp = array[j - 1]
                array[j - 1] = array[j]
                array[j] = temp

                results.push(array.slice())
            }
        }
    }

    return results
}