import React from 'react';
import SortVisualizer from './sort-visualizer'
import Controls from './controls'
import { randomNumbersArray } from '../utils/random'
import { useLocation } from "react-router-dom";
import { ROUTES } from '../constants'

const ARRAY_SIZE = 50

export default function Visualizer() {
    let { pathname } = useLocation();
    const [frame, setFrame] = React.useState<number[]>([])
    const algo =  ROUTES.find(route => route.path === pathname)

    React.useEffect(() => {
        if (!algo) {
            return
        }

        const array = randomNumbersArray({ length: ARRAY_SIZE })
        const frameArrays: number[][] = algo.algorithmFn(array)

        let i = 0
        const interval = setInterval(() => {
            if (i === frameArrays.length) {
                clearInterval(interval)
                return
            }

            setFrame(frameArrays[i++])
        }, 10);

        return () => clearInterval(interval)

    }, [algo, pathname])

    if (!algo) {
        return null
    }

    return <>
        <SortVisualizer data={frame} />
        <Controls />
    </>
} 