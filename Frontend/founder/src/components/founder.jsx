import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6"; 

function Founder(props) {
    return (
        <div>
            <div>
                <h1>Md Mobasshir shakil khan </h1>
                <img src="" alt="mobi" />
                 <a href="https://www.instagram.com/mobi__2400/" target="_blank" rel="noopener noreferrer">
                                <BiLogoInstagramAlt />  
                            </a>    
                <a href="https://github.com/mobi2400" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/md-mobasshir-shakil-khan-8ba835326/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />    
                </a>
              
            </div>
            <div>
                     <h1>Md Mobasshir shakil khan </h1>
                <img src="" alt="ayush" />
                 <a href="https://www.instagram.com/ayushnotkumar/" target="_blank" rel="noopener noreferrer">
                                <BiLogoInstagramAlt />  
                            </a>    
                <a href="https://github.com/ayushkumar320" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/ayushnotkumar/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />    
                </a>
            </div>
           
           
        </div>
    );
}

export default Founder;
