import React from 'react'
import styles from "../contactHeader/ContactHeader.module.css"

const ContactHeader = () => {
  return (
    <div className= {`container ${styles.contact_section}`}>
      <h1>CONTACT ME</h1>
      <p>
        LET'S CONNECT : I'AM HERE TO HELP, AND I'D LOVE TO HEAR FROM YOU!
        WETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO 
        CHAT, YOU CAN REACH OUT TO ME THORUTH THE CONTACT FORM 
        OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
    </div>
  )
}

export default ContactHeader
