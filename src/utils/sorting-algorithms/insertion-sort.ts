import { swap } from "../sort-utils"

export default function insertionSort(array: Array<number>, onSwap: Function) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if (array[j] < array[j - 1]) {
                onSwap(array, j, j - 1)
                swap(array, j - 1, j)
                onSwap(array, j - 1, j)
            }
        }
    }
}