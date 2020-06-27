
import insertionSort from './utils/sorting-algorithms/insertion-sort'
import bubbleSort from './utils/sorting-algorithms/bubble-sort'

export const ROUTES = [
    { id: "1", label: 'Bubble sort', path: '/bubble-sort', algorithmFn: bubbleSort },
    { id: "2", label: 'Insertion sort', path: '/insertion-sort', algorithmFn: insertionSort}
]