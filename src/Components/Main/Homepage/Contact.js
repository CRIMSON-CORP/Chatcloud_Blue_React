import React, { useRef } from "react";
import {
    FaEnvelope,
    FaFacebook,
    FaFacebookMessenger,
    FaGlobe,
    FaPhone,
    FaTwitter,
} from "react-icons/fa";
import { BiPaperPlane } from "react-icons/bi";
function Contact() {
    const name = useRef();
    const email = useRef();
    const message = useRef();
    const Form = useRef();

    async function submit_message(e) {
        e.preventDefault();
        try {
            const response = await fetch("https://chatcloud.co/wp-admin/admin-ajax.php", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    accept: "*/*",
                    "access-control-allow-credentials": true,
                    "zccess-control-allow-origin": "https://chatcloud.co",
                    "referrer-policy": "strict-origin-when-cross-origin",
                },
                "Form Data": JSON.stringify({
                    us_form_1_text_1: name.current.value,
                    us_form_1_text_2: email.current.value,
                    us_form_1_textarea_1: message.current.value,
                    action: "us_ajax_cform",
                    post_id: Math.ceil(Math.random() * 9999),
                }),
            });
        } catch (err) {
            console.log(err);
        }
    }

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
                                <p>
                                    <a href="tel:+1 (701) 638-1622" style={{ color: "white" }}>
                                        +1 (701) 638-1622
                                    </a>
                                </p>
                            </li>
                            <li>
                                <FaEnvelope />
                                <p>
                                    <a
                                        href="mailto:felicia@chatcloud.co"
                                        style={{ color: "white" }}
                                    >
                                        info@chatcloud.co
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="social_links">
                        <a href="https://www.facebook.com/ChatCloud.co">
                            <FaFacebook />
                        </a>
                        <FaTwitter />
                        <FaFacebookMessenger />
                    </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0 form">
                    <span>
                        <BiPaperPlane />
                    </span>
                    <form
                        onSubmit={submit_message}
                        ref={Form}
                        className="form h-100 d-flex flex-column px-4 px-md-5 py-3 justify-content-center"
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="John Doe"
                                ref={name}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="johndoe@email.com"
                                ref={email}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id=""
                                name="message"
                                className="form-control"
                                ref={message}
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
