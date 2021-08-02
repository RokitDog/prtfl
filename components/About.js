import React from 'react'
import styles from '../styles/About.module.css'
import { Background } from './Background';
import { ImageSection } from './ImageSection';
import { Services } from './Services';
import { Title } from './Title';

export const About = () => {
    return (
        <section className={styles.aboutContainer} >
            <div id="aboutme"></div>
            <Background />
            <div className="wrapper">
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <Services />
            </div>
        </section>
    )
}
