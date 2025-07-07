import React from "react";
import '../Styles/main.css';  // Keep this as-is

function Skills() {
    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="container2">

               
                <div className="column">
                    <div className="skill">
                        <div className="skill-label">
                            <span>JavaScript</span>
                            <span>90%</span>
                        </div>
                        <div className="skill-bar">
                            <div className="bar" style={{ width: '90%' }}></div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-label">
                            <span>Node.js</span>
                            <span>80%</span>
                        </div>
                        <div className="skill-bar">
                            <div className="bar" style={{ width: '80%' }}></div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-label">
                            <span>MongoDB</span>
                            <span>70%</span>
                        </div>
                        <div className="skill-bar">
                            <div className="bar" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="skill">
                        <div className="skill-label">
                            <span>React</span>
                            <span>85%</span>
                        </div>
                        <div className="skill-bar">
                            <div className="bar" style={{ width: '85%' }}></div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-label">
                            <span>Python</span>
                            <span>75%</span>
                        </div>
                        <div className="skill-bar">
                            <div className="bar" style={{ width: '75%' }}></div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-label">
                            <span>AWS</span>
                            <span>65%</span>
                        </div>
                        <div className="skill-bar">
                            <div className="bar" style={{ width: '65%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
