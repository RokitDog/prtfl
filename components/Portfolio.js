import React, { useState } from 'react'
import { Background } from './Background'
import { Title } from './Title'
import PortfolioData from './PortfolioData'
import { Menu } from './Menu'

export const Portfolio = () => {
    const [menuItem, setMenuItems] = useState(PortfolioData);
    return (
        <div className="portfolioContainer">
            <div id="portfolio"></div>

            <Background />
            <div className="wrapper">
                <Title title={'Portfolio'} span={'Portfolio'} />
                <div className="wrapper2">
                    <Menu menuItem={menuItem} />
                </div>
            </div>
        </div>
    )
}
