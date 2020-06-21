import React from 'react';
import { css } from 'emotion'
import Sidebar from '../components/sidebar'
import Row from '../components/row'
import Column from '../components/column'
import SortVisualizer from '../components/sort-visualizer'
import Controls from '../components/controls'
import { randomNumbersArray } from '../utils/random'
import insertionSort from '../utils/sorting-algorithms/insertion-sort'

const wait = (ms:number) => new Promise(res => setTimeout(res, ms))

export default function Home() {
    const [frame, setFrame] = React.useState<number[]>([])
    const style = css`
        height: 100vh;
    `
    React.useEffect(() => {
        const array = randomNumbersArray({ length: 50 })
        const frameArrays: number[][] = insertionSort(array)

        const animate = async () => {
            for (let i = 0; i < frameArrays.length; i++) {
                setFrame(frameArrays[i])
                await wait(10)
            }
        }

        animate()
    }, [])

    return (
        <div className={style}>
            <Row>
                <Column>
                    <Sidebar />
                </Column>
                <Column grow={5}>
                    <SortVisualizer data={frame} />
                    <Controls />
                </Column>
            </Row>
        </div>
    )
}