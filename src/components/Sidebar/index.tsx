import React from 'react'
import { css } from 'emotion'


export default function Sidebar() {

    const className = css`
        color: hotpink;
    `
    
    return (
        <div className={className}>
            <ul>
                <li>Bubble sort</li>
            </ul>
        </div>
    )
}