import React from "react";
import '../Styles/main.css'
function Contacts() {
    return (
        <section id="contacts" class="extra">
            <div class="container">
                <h2>Get In Touch</h2>
                <p>Have a project in mind?
                    Let's work together to bring your ideas to life!</p>
                <div class="details">
                    <div class="items">
                        <h3>Email</h3>
                        <p>offcial.contact@gmail.com</p>
                    </div>
                    <div class="items">
                        <h3>Phone</h3>
                        <p>+91-1140599745</p>
                    </div>
                    <div class="items">
                        <h3>Location</h3>
                        <p>India</p>
                    </div>
                </div>
                <div class="links">
                    <a href="https://www.linkedin.com/advice/3/youre-dealing-difficult-person-work-what-can-esfje">LinkedIn</a>
                    <a href="https://github.com/codecrafters-io/build-your-own-x.git">GitHub</a>
                    <a href="https://x.com/gezenhikayeci/status/1941748490930913473/photo/3/">Twitter</a>
                </div>
            </div>

        </section>
    );
};

export default Contacts;

