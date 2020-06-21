import React from 'react';
import { css } from 'emotion'
import Sidebar from '../components/sidebar'
import Row from '../components/row'
import Column from '../components/column'
import SortVisualizer from '../components/sort-visualizer'
import Controls from '../components/controls'
import { randomNumbersArray } from '../utils/random'

export default function Home() {
    const style = css`
        height: 100vh;
    `
    return (
        <div className={style}>
            <Row>
                <Column>
                    <Sidebar />
                </Column>
                <Column grow={5}>
                    <SortVisualizer data={randomNumbersArray({ length: 100 })} />
                    <Controls />
                </Column>
            </Row>
        </div>
    )
}