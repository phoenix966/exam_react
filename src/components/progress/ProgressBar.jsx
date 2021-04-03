import React from 'react'
import './progress.sass'

function ProgressBar(props) {
    return (

        <div className="progress">
            <div className="progress__time">{Math.round(props.progress)+'%'}</div>
            <div className="progress__bar" style={{width: `${Math.round(props.progress)+'%'}`}}></div>   
        </div>
    )
}

export default ProgressBar
