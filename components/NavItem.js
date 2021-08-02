import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect } from 'react';



export const NavItem = (props) => {

    let icon = props.icon

    const [open, setOpen] = useState(false);
    useEffect(() => {

        const hp =  document.querySelector('.Main_mainContent__1z7mX');
        const hp1 =  document.querySelector('.About_aboutContainer__3ZE-c');
        const hp2 =  document.querySelector('.ResumeStyled');
        const hp3 =  document.querySelector('.portfolioContainer');
        const hp4 =  document.querySelector('.contactContainer');
        hp.addEventListener('click', function(){
            if(open == true){
                setOpen(false)
            }
        })
        hp1.addEventListener('click', function(){
            if(open == true){
                setOpen(false)
            }
        })
        hp2.addEventListener('click', function(){
            if(open == true){
                setOpen(false)
            }
        })
        hp3.addEventListener('click', function(){
            if(open == true){
                setOpen(false)
            }
        })
        hp4.addEventListener('click', function(){
            if(open == true){
                setOpen(false)
            }
        })
    })

    return (
        <li className={styles.navItem}>
            <Link href={props.link ? props.link : '/'}>
                <a  target="_blank" className={styles.iconBtn} onClick={() => {
                    setOpen(!open)
                } }>
                    {icon}
                </a>
            </Link>
            {open && props.children}

            
        </li>
    )
}
