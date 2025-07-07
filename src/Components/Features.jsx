import React from "react";
import project1 from "../Assets/project1.png";
import project2 from "../Assets/project2.png";
import project3 from "../Assets/project3.png";

import '../Styles/main.css'
function Features() {
    return (
    <section id="projects" class="features">
        <h1>Featured Projects</h1>

        <div class="container cut">
            <div class="card-1" style={{ marginLeft: '50px' }}>
                <img src={project1} alt="E-Commerce Platform" />
                <div class="title">E-Commerce Platform</div>
                <div class="description">Full-Stack web application built
                    with React,Node.js and MongoDB</div>
                <div class="stack">
                    <span class="tag">React</span>
                    <span class="tag">Node.js</span>
                    <span class="tag">MongoDB</span>
                    <span class="tag">Express</span>
                </div>
                <div class="button">
                    <a href="" class="btn code">Code</a>
                    <a href="" class="btn demo">Demo</a>
                </div>
            </div>
            <div class="card-1">
                <img src={project2} alt="Task Management App" />
                <div class="title">Task Management App</div>
                <div class="description">Responsive mobile-first application
                    with real-time updates</div>
                <div class="stack">
                    <span class="tag">React Native</span>
                    <span class="tag">Firebase</span>
                    <span class="tag">Redox</span>
                </div>
                <div class="button">
                    <a href="" class="code">Code</a>
                    <a href="" class="demo">Demo</a>
                </div>
            </div>
            <div class="card-1">
                <img src={project3} alt="Data Stats" />
                <div class="title">Data Visualization</div>
                <div class="description">Interactive dashboard for business
                    analytics and reporting</div>
                <div class="stack">
                    <span class="tag">D3.js</span>
                    <span class="tag">Python</span>
                    <span class="tag">Flask</span>
                    <span class="tag">Postgre.SQL</span>
                </div>
                <div class="button">
                    <a href="" class="btn code">Code</a>
                    <a href="" class="btn demo">Demo</a>
                </div>
            </div>
        </div>
    </section>);
};

export default Features;
