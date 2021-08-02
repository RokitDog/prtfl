import React from 'react'

export const SmallTitle = ({icon, title}) => {
    return (
        <div className="smalltitlestyled">
            <p>{icon}</p>
            <h3>{title}</h3>
        </div>
    )
}
