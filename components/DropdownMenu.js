// import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import CreateIcon from '@material-ui/icons/Create';
import StarIcon from '@material-ui/icons/Star';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ContactMailIcon from '@material-ui/icons/ContactMail';






export const DropdownMenu = () => {
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height+30);
  }

  function DropdownItem(props) {
    return (
        <a href={props.link}
          className={styles.menuItem}        
        >
          <span className={styles.iconButton}>{props.leftIcon}</span>
          {props.children}
          <span className={styles.iconRight}>{props.rightIcon}</span>
        </a>
    );
  }

  return (
    <div className={styles.dropdown} style={{height:menuHeight}}>
        <div className={styles.menu}>
          <DropdownItem link='#home' leftIcon={<HomeIcon />}>Home</DropdownItem>
          <DropdownItem link="#aboutme" leftIcon={<PeopleAltIcon />} > About Me </DropdownItem>
          <DropdownItem link="#services" leftIcon={<CreateIcon />} > Services </DropdownItem>
          <DropdownItem link="#skills" leftIcon={<StarIcon />} > Skills </DropdownItem>
          <DropdownItem link="#resume" leftIcon={<SpeakerNotesIcon />} > Resume </DropdownItem>
          <DropdownItem link="#portfolio" leftIcon={<BusinessCenterIcon />} > Portfolio </DropdownItem>
          <DropdownItem link="#contact" leftIcon={<ContactMailIcon />} > Contact </DropdownItem>
        </div>

    </div>
  );
};
