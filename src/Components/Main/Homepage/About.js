import React from "react";
import about from "../../../images/about.jpg";
function About() {
    return (
        <section id="about">
            <img src={about} alt="" className="bg" />
            <div className="text-center content">
                <h1 className="mb-4 font-weight-bold head-text">
                    About <br />
                    Chatcloud
                </h1>
                <p className="m-auto">
                    ChatCloud is a Lead generation agency that is dedicated to serving you with the
                    best qualified leads using their live chat software and live human customer
                    support on your website and social media 24/7/365. Capture leads from your
                    potential customers even on holidays and after business hours!
                </p>
            </div>
        </section>
    );
}

export default About;
