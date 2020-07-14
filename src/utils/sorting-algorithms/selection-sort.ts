import { swap } from "../sort-utils"

export default function selectionSort(array: Array<number>, onSwap: Function) {
    for (let i = 0; i < array.length; i++) {
        let min = i

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }

        onSwap(array, min, i)
        swap(array, i, min)
        onSwap(array, i, min)
    }
}