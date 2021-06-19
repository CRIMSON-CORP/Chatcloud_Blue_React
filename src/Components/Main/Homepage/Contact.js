import React, { useRef, useEffect, useState } from "react";
import {
    FaEnvelope,
    FaFacebook,
    FaFacebookMessenger,
    FaGlobe,
    FaPhone,
    FaLinkedin,
} from "react-icons/fa";
import { BiPaperPlane } from "react-icons/bi";
import { change_title, Notification } from "../../utils/utils";
function Contact() {
    const [sending, setSending] = useState(false);
    const name = useRef();
    const email = useRef();
    const message = useRef();
    const Form = useRef();
    useEffect(() => {
        change_title();
    }, []);

    async function submit_message(e) {
        e.preventDefault();
        const data = new FormData();
        data.append("name", name.current.value);
        data.append("email", email.current.value);
        data.append("message", message.current.value);
        data.append("post_id", Math.ceil(Math.random() * 9999));

        const xhr = new XMLHttpRequest();
        setSending(true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                let response = xhr.responseText;
                if (response === "success") {
                    Notification("success", "Message Sent!", "Your message has been sent!", 3000);
                    name.current.value = email.current.value = message.current.value = null;
                } else {
                    Notification(
                        "danger",
                        "Message not Sent!",
                        "Your message could not be sent!",
                        3000
                    );
                }
                setSending(false);
            }
        };
        xhr.open("POST", "https://chatcloud.co/wp-content/themes/build/ajax.php", true);
        xhr.send(data);
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
                        <a
                            href="https://www.facebook.com/ChatCloud.co"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaFacebook />
                        </a>
                        <a href="https://m.me/chatcloud.co" target="_blank" rel="noreferrer">
                            <FaFacebookMessenger />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/chatcloud-co"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div className="col-md-6 mt-md-0 form">
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
                                className="form-control name"
                                placeholder="John Doe"
                                ref={name}
                                required={true}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control email"
                                placeholder="johndoe@email.com"
                                ref={email}
                                required={true}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id=""
                                name="message"
                                className="form-control message"
                                ref={message}
                                placeholder="Your message here..."
                                required={true}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="form-submit text-uppercase font-weight-bold mt-3"
                        >
                            {sending ? <span className="spinner-border"></span> : "send message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
