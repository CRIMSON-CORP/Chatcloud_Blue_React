import React, { useEffect } from "react";
import {
    FaEnvelope,
    FaFacebook,
    FaFacebookMessenger,
    FaGlobe,
    FaPhone,
    FaTwitter,
} from "react-icons/fa";
import { ContactAnim } from "../../utils/gsap";
function Contact() {
    useEffect(() => {
        window.scrollY = 0;
        ContactAnim();
    }, []);
    return (
        <section id="contact">
            <div className="rows">
                <div className="col-md-6 info">
                    <div className="wrapper">
                        <h1 className="mb-3 font-weight-bold">Contact Us</h1>
                        <p>Our Sales & Support team is available 24/7 to assist you.</p>
                        <ul className="list-unstyled">
                            <li>
                                <FaGlobe />
                                <p>Jamestown, North Dakota</p>
                            </li>
                            <li>
                                <FaPhone />
                                <p>+1 (701) 638-1622</p>
                            </li>
                            <li>
                                <FaEnvelope />
                                <p>info@chatcloud.co</p>
                            </li>
                        </ul>
                    </div>
                    <div className="social_links">
                        <FaFacebook />
                        <FaTwitter />
                        <FaFacebookMessenger />
                    </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0 form">
                    <span className="bx bxs-paper-plane"></span>
                    <form
                        action="/"
                        method="post"
                        className="form h-100 d-flex flex-column px-4 px-md-5 py-3 justify-content-center"
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="johndoe@email.com"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id=""
                                name="message"
                                className="form-control"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="form-submit text-uppercase font-weight-bold mt-3"
                        >
                            send message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
