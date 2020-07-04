import { swap } from "../sort-utils"

export default function selectionSort(array: Array<number>) {
    const results = [array.slice()]

    for (let i = 0; i < array.length; i++) {
        let min = i

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }

        swap(array, i, min)
        results.push(array.slice())
    }

    return results
}