import React from 'react'
import { Link } from "react-router-dom";
import { css } from 'emotion'

const links = [
    { id: "1", label: 'Bubble sort', route: '/bubble-sort' },
    { id: "2", label: 'Insertion sort', route: '/insertion-sort' },
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
            {links.map(link => 
                <div key={link.id}>
                    <Link to={link.route}>{link.label}</Link>
                </div>
            )}
        </div>
    )
}