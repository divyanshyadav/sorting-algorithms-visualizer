import React from 'react'
import { css } from 'emotion'

const links = [
    { id: "1", label: 'Bubble sort' },
]

export default function Sidebar() {

    const className = css`
        color: hotpink;
        background-color: lightgrey;
        height: 100%;
        padding: 0px 20px;
    `
    
    return (
        <div className={className}>
            {links.map(link => <div key={link.id}>{link.label}</div>)}
        </div>
    )
}