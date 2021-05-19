import React from "react";
import { useHistory } from "react-router-dom";
function GetStared() {
    const history = useHistory();
    return (
        <section id="start">
            <div className="text-center content">
                <h1 className="mb-4 font-weight-bold head-text">Getting Started!</h1>
                <p className="mx-auto mb-4">
                    Give us a call or send an email. After understanding your needs we will assign
                    you an Accounts Manager who is going to provide you with our plugin.
                </p>
                <button className="slide px-3 py-2 text-uppercase rounded">
                    <span className="text">
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                history.push("/contact");
                            }}
                        >
                            Contact Us
                        </a>
                    </span>
                </button>
            </div>
        </section>
    );
}

export default GetStared;
