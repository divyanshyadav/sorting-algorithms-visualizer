import React from 'react';
import { css } from 'emotion'

interface ColumnProps {
    children: React.ReactNode,
    grow?: number
}

export default function Column({ children, grow = 1 }: ColumnProps) {
    const className = css`
        flex-grow: ${grow}
    `

    return (
        <div className={className}>{children}</div>
    )
}