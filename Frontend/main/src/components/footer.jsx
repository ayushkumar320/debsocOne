import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import { MdOutlineAlternateEmail } from "react-icons/md";

const date = new Date();
const year = date.getFullYear();


function Footer() {
    return (
        <footer>
          

            <p>Copyright © {year} SMVIT DEBSOC</p>
            <h5>Follow us on social media:</h5>
            <a href="https://www.instagram.com/smvit_debsoc/" target="_blank" rel="noopener noreferrer">
                <BiLogoInstagramAlt />
            </a>
            <a href="https://www.facebook.com/people/SMVIT-DEBSOC/100085129608350/" target="_blank" rel="noopener noreferrer">
                <BsFacebook />
            </a>
            <a href="https://www.youtube.com/@smvitdebsoc738" target="_blank" rel="noopener noreferrer">
                <TfiYoutube />
            </a>
            <a href="mailto:smvitdebsoc12@gmail.com">
                <MdOutlineAlternateEmail />
            </a>
        </footer>
    );
}



export default Footer;
