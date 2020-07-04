export function swap(array: Array<any>, indexA: number, indexB: number) {
    const temp = array[indexA]
    array[indexA] = array[indexB]
    array[indexB] = temp
}