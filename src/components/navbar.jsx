import React from "react"
import '../styles/components/navbar.sass'


export default function Nav() {
    return(
        <nav id="navbar">
            <a id="navbar--logo" href="https://medium.com/@JOrlandoSP" target="_blank">aJOrlandoSP </a>
            <div className="navbar--links">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}
