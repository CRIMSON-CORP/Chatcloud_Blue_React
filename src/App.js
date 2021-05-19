/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Main from "./Components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import PostsBlock from "./Components/utils/context";
import { BiUpArrowAlt } from "react-icons/bi";
import "jquery.easing";
import $ from "jquery";
function App() {
    useEffect(() => {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $(".back-to-top").fadeIn("slow");
            } else {
                $(".back-to-top").fadeOut("slow");
            }
        });
    }, []);
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <PostsBlock>
                <Main />
            </PostsBlock>
            <a
                className="back-to-top"
                onClick={() => {
                    $("html, body").animate(
                        {
                            scrollTop: 0,
                        },
                        1500,
                        "easeInOutExpo"
                    );
                }}
            >
                <BiUpArrowAlt size=".7rem" />
            </a>
        </Router>
    );
}

export default App;
