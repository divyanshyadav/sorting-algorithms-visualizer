
import insertionSort from './utils/sorting-algorithms/insertion-sort'
import bubbleSort from './utils/sorting-algorithms/bubble-sort'
import selectionSort from './utils/sorting-algorithms/selection-sort'

export const ROUTES = [
    { id: "1", label: 'Bubble sort', path: '/bubble-sort', algorithmFn: bubbleSort },
    { id: "2", label: 'Insertion sort', path: '/insertion-sort', algorithmFn: insertionSort },
    { id: "3", label: 'Selection sort', path: '/selection-sort', algorithmFn: selectionSort },

]