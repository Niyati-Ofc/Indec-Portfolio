import React, { useEffect } from "react";
import profile from "../Assets/Profiile.jpg"
import '../Styles/main.css';
function Home() {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            const profileImg = document.getElementById("profile-img");

            if (window.scrollY > 50) {
                header?.classList.add("scrolled");
                profileImg?.classList.add("floating-assistant");
            } else {
                header?.classList.remove("scrolled");
                profileImg?.classList.remove("floating-assistant");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <div className="container1">
            <header>
                <div className="container">
                    <div id="logo">
                        <h1>Portfolio</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><a className="highlight" href="index">HOME</a></li>
                            <li><a href="#About">ABOUT</a></li>
                            <li><a href="#skills">SKILLS</a></li>
                            <li><a href="#projects">PROJECTS</a></li>
                            <li><a href="#contacts">CONTACTS</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section className="code">
                <div className="container">
                    <div className="text">
                        <h1>Hi , I'm <span className="author">Niyati Sharma</span></h1>
                        <p>Full Stack Developer passionate about
                            creating innovative web solutions</p>
                        <div className="btn">
                            <button type="submit" id="primary">View My Work</button>
                            <button type="submit" id="secondary">Get In Touch</button>
                        </div>
                    </div>
                    <div className="profile">
                        <img id="profile-img" src={profile} alt="profile" className="profile-img" />

                    </div>
                </div>
            </section>
        </div>

    );
};

export default Home;

