import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEdit, FaFacebook, FaFileInvoiceDollar, FaGlobe, FaSms } from "react-icons/fa";
import { change_title } from "../../utils/utils";
function Services() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const items = gsap.utils.toArray(".grid_item");
        items.forEach((item) => {
            gsap.from(item, {
                scrollTrigger: item,
                y: 100,
                opacity: 0,
                start: "center bottom",
                duration: 1,
                scale: 0.5,
                transformOrigin: "center center",
                ease: "power4.Out",
                stagger: { each: 0.25 },
            });
        });
        change_title();
        console.clear();
    }, []);
    const card = [
        {
            icon: <FaGlobe />,
            h3: "Live Chat Web",
            text: `24/7 Live Chat feature for your website to generate leads from the
                         traffic.`,
        },
        {
            icon: <FaFacebook />,
            h3: "Facebook & Instagram Integration",
            text: `Your customers can connect with our live chat representatives via
                         Facebook & Instagram messenger.`,
        },
        {
            icon: <FaSms />,
            h3: "Call Connect Feature",
            text: `Instant phone call transfers during your selected hours.`,
        },
        {
            icon: <FaSms />,
            h3: "Text Message & WhatsApp Integration",
            text: `A Text to Chat feature to communicate with your customers via Text
                         messages and WhatsApp messages.`,
        },
        {
            icon: <FaEdit />,
            h3: "Customized Questions & Responses",
            text: `Unlimited customized set of questions and responses according to your specific needs.`,
        },
        {
            icon: <FaFileInvoiceDollar />,
            h3: "No Obligation Free Trial",
            text: `We offer a 14 days free trial with no upfront fee or any credit card information.`,
        },
    ];

    const CardJSX = card.map(({ icon, h3, text }, index) => {
        return <Card icon={icon} h3={h3} text={text} key={index} />;
    });
    return (
        <div id="services">
            <div className="header text-center">
                <h1 className="font-weight-bold head-text">Our Services</h1>
            </div>
            <div className="grid p-3 p-md-5 py-5">{CardJSX}</div>
        </div>
    );
}

export default Services;

function Card({ icon, h3, text }) {
    return (
        <div className="grid_item">
            <div className="icon">{icon}</div>
            <div className="content">
                <div>
                    <h3>{h3}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}
