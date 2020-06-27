import React from 'react'
import { Link } from "react-router-dom";
import { css } from 'emotion'
import { ROUTES } from '../constants'

export default function Sidebar() {

    const className = css`
        color: hotpink;
        background-color: lightgrey;
        height: 100%;
        padding: 0px 20px;
    `
    
    return (
        <div className={className}>
            {ROUTES.map(link => 
                <div key={link.id}>
                    <Link to={link.path}>{link.label}</Link>
                </div>
            )}
        </div>
    )
}