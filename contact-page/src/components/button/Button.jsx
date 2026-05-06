import React from 'react'
import styles from "../button/Button.module.css"


        {/* <TiMessages />
        <FaPhone /> */}

const Button = ({isOutline, icon, text}) => {

    
  return (
        <button className= {isOutline ? styles.outline_btn : styles.primary_btn}>
            {icon}
            {text}
        </button>
  )
}

export default Button
