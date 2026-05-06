import React from "react";
import styles from "../navigation/Navigation.module.css"
// import "../../App.css"


const Navigation = () => {

  return (
    <nav className= {` ${styles.navigation} container`}>
      <div className="logo">
        <img src="src/pictures/logo.png" alt="logo" />
      </div>

      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navigation;
