import React from "react"
import '../styles/components/navbar.sass'


export default function Nav() {
    return(
        <div id="navbar">
            <h1 id="navbar--logo">@JOrlandoSP</h1>
            <div className="navbar--links">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}
