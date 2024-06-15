import About from "./About.tsx";
import Skills from "./Skills.tsx";
import Education from "./Education.tsx";
import Portfolio from "./Portfolio.tsx";
import Contact from "./Contact.tsx";
import React from "react";
import {SlIconButton} from "@shoelace-style/shoelace/dist/react";


export default function Home() {

    const [open, setOpen] = React.useState(false);

    function handleMenuClick(ref: string) {
        setOpen(false);
        let scrollElement: HTMLElement | null = null;
        if (ref) {
            scrollElement = document.getElementById(ref);
        }
        if (scrollElement) {
            scrollElement.scrollIntoView({ behavior: "smooth" });
        } else {
            console.warn(`Element with id ${ref} not found`);
        }
    }

    function toggleNav() {
        setOpen(!open);
    }

    return (
        <>
            <div className="page-content">
                <div className="content-container">
                    <header className="app-header">
                        <div className="app-header-main">
                            <div className="app-logo">
                                <a href="/"> <img className="logo" src="/images/kb-logo.svg" alt="Karsten Beck Logo" />
                                </a>
                                <h2>Karsten Beck</h2>
                            </div>

                            <SlIconButton
                                className="hamburger-btn"
                                name="list"
                                style={{fontSize: '2rem'}}//onClick={hamburgerClick}
                                onClick={toggleNav}

                            />
                        </div>
                    </header>

                    <nav id="sidenav" className={`sidenav ${open ? 'open' : 'close'}`}>

                        <div className="navTop">
                            <a href="#" id="closeBtn" className="closeButton" onClick={toggleNav}>&times;</a>
                            <ul>
                                <li className="navLink">
                                    <a onClick={() => handleMenuClick('home')}>Home</a></li>
                                <li className="navLink">
                                    <a onClick={() => handleMenuClick('about')}>About</a>
                                </li>
                                <li className="navLink">
                                    <a onClick={() => handleMenuClick('skills')}>Skills</a></li>
                                <li className="navLink">
                                    <a onClick={() => handleMenuClick('education')}>Education</a>
                                </li>
                                <li className="navLink">
                                    <a onClick={() => handleMenuClick('portfolio')}>Portfolio</a>
                                </li>
                                <li className="navLink">
                                    <a onClick={() => handleMenuClick('contact')}>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div id="home"></div>
                    <div id="about"><About /></div>
                    <div id="skills"><Skills /></div>
                    <div id="education"><Education /></div>
                    <div id="portfolio"><Portfolio /></div>
                    <div id="contact"><Contact /></div>
                </div>
            </div>
        </>
    )
        ;
}