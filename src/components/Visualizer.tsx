import React from 'react';
import SortVisualizer from './sort-visualizer'
import Controls from './controls'
import { randomNumbersArray } from '../utils/random'
import insertionSort from '../utils/sorting-algorithms/insertion-sort'
import { useLocation } from "react-router-dom";

const ARRAY_SIZE = 50
const sortingAlgorithms = new Map()
sortingAlgorithms.set('/insertion-sort', insertionSort)

export default function Visualizer() {
    let { pathname } = useLocation();
    const [frame, setFrame] = React.useState<number[]>([])

    React.useEffect(() => {
        if (!sortingAlgorithms.has(pathname)) {
            return
        }

        const array = randomNumbersArray({ length: ARRAY_SIZE })
        const frameArrays: number[][] = sortingAlgorithms.get(pathname)(array)

        let i = 0
        const interval = setInterval(() => {
            if (i === frameArrays.length) {
                clearInterval(interval)
                return
            }

            setFrame(frameArrays[i++])
        }, 10);

        return () => clearInterval(interval)

    }, [pathname])

    if (!sortingAlgorithms.has(pathname)) {
        return null
    }

    return <>
        <SortVisualizer data={frame} />
        <Controls />
    </>
} 