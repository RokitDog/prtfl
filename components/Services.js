import React from 'react'
import { ServiceCard } from './ServiceCard'
import { Title } from './Title'

export const Services = () => {
    return (
        <section className="servicesContainer">
            <div id="services"></div>

            <Title title={'Services'} span={'Services'}/>
            <div className="services">
                <ServiceCard 
                image={'./design.svg'} 
                title={'Custom Websites'}
                paragraph={'Creating a website from the ground up using HTML5, CSS3/SCSS and JS and JS Frameworks.'}/>
                <div className="mid-card">
                <ServiceCard 
                image={'./intelligence.svg'} 
                title={'WordPress Websites'}
                paragraph={'Building Websites using WordPress themes, plugins and page builders like Elementor or Divi.'}/>
                </div>
                <ServiceCard 
                image={'./game-dev.svg'} 
                title={'Web Design'}
                paragraph={'Web Design using latest software like Figma or AdobeXD'}/>
            </div>
        </section>
        
    )
}
