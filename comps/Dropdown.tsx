import React, { useEffect } from "react";
import styles from "../styles/dropdown.module.scss";
import Link from "next/link";
import Image from "next/image";

function Dropdown() {


const toggle = () => {
  return (event: React.MouseEvent) => {
  document.getElementById("menu").classList.toggle(styles["show"]);
  } 
}

  useEffect(() => {
  
    window.onclick = function(event) {
      if (!event.target.classList.contains
        (styles[ 'trigger' ])) {
        var dropdowns = document.getElementsByClassName(styles[ "content" ]);
        console.log(event.target)
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains(styles["show"])) {
            openDropdown.classList.remove(styles["show"]);
          }
        }
      }
    }
  },[]);    
  

  return (
  <div>
    <button className={ styles.trigger } onClick ={toggle()}>
       Join Us
    </button>
    <Image src='/arrow.svg'
      width={16}
      height={8}
      alt='arrow'
    ></Image>
    <div id="menu" className={ styles.content }>
          <Link href="/partner">
            Partnering
          </Link>
          <p> See what we can help you with </p>
          <Link href='/volunteer'>
            Volunteering
          </Link>
          <p>Learn how you can get involved</p>
    </div>
  </div>
  );
}
 
export default Dropdown;