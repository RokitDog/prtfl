
import React from 'react'


export const ServiceCard = ({image, title, paragraph}) => {
    return (
        <div className="service-card">
            <div className="container">
                <img src={image} 
                    alt="image"
                />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}
