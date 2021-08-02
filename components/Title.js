import React from 'react'


export const Title = ({title, span}) => {
    return (
        <div className="titlestyled">
            <h2>{title} <span>{span}</span></h2>

        </div>
    )
}
