import React, { useEffect } from "react";
import { AllAnimations } from "../utils/gsap";
import About from "./Homepage/About";
import Contact from "./Homepage/Contact";
import GetStared from "./Homepage/GetStared";
import Hero from "./Homepage/Hero";
import Industries from "./Homepage/Industries";
import Posts from "./Homepage/Posts";
import Services from "./Homepage/Services";
import "jquery.easing";
import $ from "jquery";
import { change_title } from "../utils/utils";
function Homepage() {
    useEffect(() => {
        setTimeout(() => {
            AllAnimations();
        }, 100);

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $(".back-to-top").fadeIn("slow");
            } else {
                $(".back-to-top").fadeOut("slow");
            }
        });
        change_title();
    }, []);
    return (
        <>
            <Hero />
            <About />
            <GetStared />
            <Industries />
            <Services />
            <Posts />
            <Contact />
        </>
    );
}

export default Homepage;
