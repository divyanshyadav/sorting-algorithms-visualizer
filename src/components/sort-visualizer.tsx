import React from 'react';
import { css } from 'emotion'
import { Frame } from './Visualizer'

interface SortVisualizerProps {
    frame: Frame,
}

export default function SortVisualizer({ frame }: SortVisualizerProps) {
    const style = css`
        align-items: flex-end;
        background: white;
        border: 5px solid black;
        display: flex;
        flex-direction: row;
        height: 300px;
    `
    
    const renderBars = () => frame.data.map((value, index) => {

        const getBarColor = () => {
            if (index === frame.indexA) {
                return 'green'
            }

            if (index === frame.indexB) {
                return 'red'
            }

            return 'grey'
        }

        const barStyle = (height: number, width: number) => css`
            background: ${getBarColor()};
            height: ${height}%;
            width: ${width}%;
        `
        
        const height = (value / frame.data.length) * 100
        const width = (1 / frame.data.length) * 100

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