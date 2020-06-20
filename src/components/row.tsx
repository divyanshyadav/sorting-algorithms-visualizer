import React from 'react';
import { css } from 'emotion'

interface RowProps {
    children: React.ReactNode
}

export default function Row({ children }: RowProps) {
    const className = css`
        display: flex;
        flex-direction: row;
        height: 100%;
    `
    
    return (
        <div className={className}>
            {children}
        </div>
    )
}