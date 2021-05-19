/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Main from "./Components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import PostsBlock from "./Components/utils/context";
import { BiUpArrowAlt } from "react-icons/bi";
import "jquery.easing";
import $ from "jquery";
import { TweenLite, gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
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
    gsap.registerPlugin(ScrollToPlugin);
    return (
        <Router>
            <PostsBlock>
                <Main />
            </PostsBlock>
            <a
                className="back-to-top"
                onClick={() => {
                    TweenLite.to(window, 1, { scrollTo: { y: 0 }, ease: "Power4.inOut()" });
                }}
            >
                <BiUpArrowAlt size=".7rem" />
            </a>
        </Router>
    );
}

export default App;
