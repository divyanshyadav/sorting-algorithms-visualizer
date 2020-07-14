import React from 'react';
import SortVisualizer from './sort-visualizer'
import Controls from './controls'
import { randomNumbersArray } from '../utils/random'
import { useLocation } from "react-router-dom";
import { ROUTES } from '../constants'

const ARRAY_MAX_SIZE = 500
const ARRAY_SIZE = 50
const DELAY = 50

export interface Frame {
    data: Array<number>
    indexA: number
    indexB: number
}

export default function Visualizer() {
    let { pathname } = useLocation();
    const [frame, setFrame] = React.useState<Frame>({ data: [], indexA: -1, indexB: -1 })
    const [size, setSize] = React.useState<number>(ARRAY_SIZE)
    const [delay, setDelay] = React.useState<number>(DELAY)
    const algo =  ROUTES.find(route => route.path === pathname)



    React.useEffect(() => {
        if (!algo) {
            return
        }

        window.document.title = algo.label

        const array = randomNumbersArray({ length: size })
        const framesArrays : Array<Frame>= []
        const firstFrame: Frame = {
            data: array.slice(),
            indexA: -1,
            indexB: -1
        } 
        framesArrays.push(firstFrame)
        function onSwap(arr: Array<number>, i: number, j: number) {
            const frame: Frame = {
                data: arr.slice(),
                indexA: i,
                indexB: j
            }
            framesArrays.push(frame)
        }

        algo.algorithmFn(array, onSwap)
        setFrame(firstFrame)
        let i = 0
        const interval = setInterval(() => {
            if (i === framesArrays.length) {
                clearInterval(interval)
                return
            }

            setFrame(framesArrays[i++])
        }, delay);

        return () => clearInterval(interval)

    }, [algo, delay, pathname, size])

    if (!algo) {
        return null
    }

    function handleSizeChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (parseInt(e.target.value) > ARRAY_MAX_SIZE) {
            return false
        }
        
        setSize(parseInt(e.target.value))
    }

    function handleDelayChange(e: React.ChangeEvent<HTMLInputElement>) {
        setDelay(parseInt(e.target.value))
    }

    return <>
        <SortVisualizer frame={frame} />
        {/* <form>
            <label htmlFor="size">
                Size: <input name="size" type="number" value={size} onChange={handleSizeChange} min="1" max={ARRAY_MAX_SIZE} />
            </label>
            <label htmlFor="delay">
                Delay: <input name="delay" type="number" value={delay} onChange={handleDelayChange} min="1" max="10000" />
            </label>
        </form> */}
        {/* <Controls /> */}
    </>
} 