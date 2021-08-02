
import React from 'react'
import { ProgressBar } from './ProgressBar'
import { Title } from './Title'

export const Skills = () => {
    return (
        <div className="skillsstyled">
            <div id="skills"></div>

            <div className="wrapper">
                <Title title={'My Skills'} span={'My Skills'} className="skillsTitle"/>
                <div className="wrapper2">
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width1={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'CSS3/SCSS'}
                            width1={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'JavaScript'}
                            width1={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width1={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'Next JS'}
                            width1={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'WordPress'}
                            width1={'80%'}
                            text={'80%'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
