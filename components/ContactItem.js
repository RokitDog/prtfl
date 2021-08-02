import React from 'react'


export const ContactItem = ({icon, title, contact1, contact2}) => {
    return (
        <div className="contactItemStyled">
            <div className="left-content">
                <p>
                    {icon}
                </p>
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <a href="mailto:bojanforgaming@hotmail.com">{contact1}</a>
                <p>{contact2}</p>
            </div>
        </div>
    )
}
