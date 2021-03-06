import React from "react";
import { Link } from "react-router-dom";
function GetStared() {
    return (
        <section id="start">
            <div className="text-center content">
                <h1 className="mb-4 font-weight-bold head-text">Getting Started!</h1>
                <p className="mx-auto mb-4">
                    Give us a call or send an email. After understanding your needs we will assign
                    you an Accounts Manager who is going to provide you with our plugin.
                </p>
                <Link
                    to="/contact-us"
                    onClick={(e) => {
                        window.scrollTo({
                            top: 0,
                            scrollBehavior: "auto",
                        });
                    }}
                >
                    <button className="slide px-3 py-2 text-uppercase rounded">
                        <span className="text">Contact Us</span>
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default GetStared;
