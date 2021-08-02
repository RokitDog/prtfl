import React from 'react'

export const ProgressBar = ({title, width1, text}) => {
    return (
        <div className="progress-barstyled">
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                    <span style={{width: width1}}></span>
                </div>
            </div>
        </div>
    )
}
