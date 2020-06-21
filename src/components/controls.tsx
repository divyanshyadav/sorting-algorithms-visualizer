import React from 'react';
import { css } from 'emotion'

interface ControlsProps {
    onClickPlay?: Function,
    onClickNext?: Function,
    onClickPrev?: React.MouseEventHandler
}

export default function Controls(props: ControlsProps) {
    const style = css`
        display: flex;
        justify-content: center;
    `

    return (
        <div className={style}>
            <button onClick={props.onClickPrev}><span role="img" aria-label="previous">⏪</span></button>
            <button><span role="img" aria-label="play/pause">⏯</span></button>
            <button><span role="img" aria-label="next">⏩</span></button>
        </div>
    )
}