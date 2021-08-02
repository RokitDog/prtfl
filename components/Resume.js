import React from 'react'
import styles from '../styles/Resume.module.css'
import { Background } from './Background'
import { Skills } from './Skills'
import { SmallTitle } from './SmallTitle'
import { Title } from './Title'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import { ResumeItem } from './ResumeItem'

export const Resume = () => {
    return (
        <div className="ResumeStyled">

            <Background />
            <Skills />
            <div className="wrapper">
            <div id="resume"></div>

                <Title title={'Resume'} span={'Resume'}/>
                <div className="wrapper2">
                    <div className="small-title">
                    <SmallTitle icon={<BusinessCenterIcon/>} title={'Working Experience'}/>
                    </div>
                    <div className="resume-content">
                        <ResumeItem 
                            year={'2021'}
                            title={'Intern at Baseline Creative'}
                            subTitle={'Baseline Creative'}
                            text={'Joined a team of great Graphic Designers and Web Developers. With strong mentorship i developed my skills even further. This was my first encounter with the WPBakeru page builder and Total Theme.'}    
                        />
                        <ResumeItem 
                            year={'2020 - 2020'}
                            title={'Authentic Timber Windows Web Developer'}
                            subTitle={'Authentic Timber Windows Inc'}
                            text={'In this firm, I was a lead designer and developer for 2 Websites. Both sites were built on the Astra theme using Elementor and plugins such as Woocomerce for the shop. One  of the sites also used Stripe for payments.'}    
                        />
                        <div className="u-margin-bottom">
                            <ResumeItem 
                                year={'2015 - Present'}
                                title={'Student of Graphic Design'}
                                subTitle={'Faculty of Technical Science'}
                                text={''}    
                            />
                        </div>
                    </div>
                    <div className="small-title">
                    <SmallTitle icon={<SchoolIcon/>} title={'Education'}/>
                    </div>
                    <div className="resume-content">
                        <ResumeItem 
                            year={'2015 - present'}
                            title={'Graphic Designer Degree'}
                            subTitle={'Faculty of Technical Science'}
                            text={''}    
                        />
                        <ResumeItem 
                            year={'2015'}
                            title={'Computer Science'}
                            subTitle={'Electrotechnical School'}
                            text={''}    
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
