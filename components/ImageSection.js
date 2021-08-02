
import React from 'react'

export const ImageSection = () => {
    return (
        <div className="imageSectionStyled">
            <div className="left-content">
                <img src={'./resume.jpg'} 
                className="resumepic"            
                alt="resume picture"/>
            </div>
            <div className="right-content">
                <h4>I am <span>Bojan!</span></h4>
                <p className="paragraph">
                Dynamic and motivated professional
                skilled in learning business processes
                and applications in an efficient manner.
                Experienced in managing projects from
                conception to completion, analyzing
                and interpreting large data, and
                recognizing efficiencies and trends that
                identify, measure, and mitigate risk.
                Able to work independently as well as in
                a team environment, I bring creative
                and smart graphic designs
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info-title">
                        <p>: Bojan Martinov</p>
                        <p>: 25</p>
                        <p>: Serbian</p>
                        <p>: English / Serbian</p>
                        <p>: Novi Sad, Serbia</p>
                        <p>: Freelance</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
