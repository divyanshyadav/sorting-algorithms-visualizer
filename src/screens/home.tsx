import React from 'react';
import { css } from 'emotion'
import Sidebar from '../components/sidebar'
import Row from '../components/row'
import Column from '../components/column'
import Visualizer from '../components/Visualizer'

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
                    <Visualizer />
                </Column>
            </Row>
        </div>
    )
}