import React from 'react'
import { css } from 'emotion'

const links = [
    { id: "1", label: 'Bubble sort' },
]

export default function Sidebar() {

    const className = css`
        color: hotpink;
        background-color: lightgrey;
        max-width: 300px;
        height: calc(100vh - 40px);
        padding: 20px;
    `
    
    return (
        <div className={className}>
            <ul>
                {links.map(link => <li key={link.id}>{link.label}</li>)}
            </ul>
        </div>
    )
}