import React from "react";
import { FaEdit, FaFacebook, FaFileInvoiceDollar, FaGlobe, FaSms } from "react-icons/fa";
function Services() {
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
            text: `24/7 Live Chat feature for your website to generate leads from the
                         traffic.`,
        },
        {
            icon: <FaFileInvoiceDollar />,
            h3: "No Obligation Free Trial",
            text: `24/7 Live Chat feature for your website to generate leads from the
                         traffic.`,
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
