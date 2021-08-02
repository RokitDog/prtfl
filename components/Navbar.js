
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'



export const Navbar = (props) => {
    return (
        <nav className={styles.navbar}> 
            <ul className={styles.navbarNav}> { props.children }</ul>
            
        </nav>

        
    )
}
