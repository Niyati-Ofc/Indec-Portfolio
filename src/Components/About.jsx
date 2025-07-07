import React from "react";
import '../Styles/main.css'

function About() {
    return (
        <section id="About" className="oxy">
            <div className="container tilt">

                <h2>About Me</h2>
                <p classNameName="Description" style={{ fontSize: '18px', textAlign: 'center', maxWidth: '600px', margin: '30px auto' }}>
                    I'm a passionate full-stack developer with 3+ years of experience creating
                    web application that solve real-world problems.I love working with modern technologies
                    and am always eager to learn new things.
                </p>

                <div className="about-cards">
                    <div className="card">
                        <h3>Clean Code</h3>
                        <p>Writing maintainable,scalable code
                            that follows best practices</p>
                    </div>
                    <div className="card">
                        <h3>Responsive Design</h3>
                        <p>Creating beautiful,
                            mobile-first designs that work
                            on all devices</p>
                    </div>
                    <div className="card">
                        <h3>Performance</h3>
                        <p>optimizing applications for speed and best user experience</p>
                    </div>
                </div>
            </div>
        </section>);
};

export default About;
