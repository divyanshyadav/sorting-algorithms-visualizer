import React from 'react';
import { css } from 'emotion'

interface SortVisualizerProps {
    data: Array<number>,
}

export default function SortVisualizer({ data }: SortVisualizerProps) {
    const style = css`
        align-items: flex-end;
        background: white;
        border: 5px solid black;
        display: flex;
        flex-direction: row;
        height: 300px;
    `

    const renderBars = () => data.map((value, index) => {
        const barStyle = (height: number, width: number) => css`
            background: hotpink;
            height: ${height}%;
            width: ${width}%;
        `
        
        const height = (value / data.length) * 100
        const width = (1 / data.length) * 100

        return (
            <div 
                key={index} 
                className={barStyle(height, width)}
            />
        )
    })

    return (
        <div className={style}>
            {renderBars()}
        </div>
    )
}