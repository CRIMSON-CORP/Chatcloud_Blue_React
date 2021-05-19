import React, { useEffect, useRef } from "react";
import One from "../../../images/industries/1.jpg";
import Two from "../../../images/industries/2.jpg";
import Three from "../../../images/industries/3.jpg";
import Four from "../../../images/industries/4.jpg";
import Five from "../../../images/industries/5.jpg";
import Six from "../../../images/industries/6.jpg";
import Seven from "../../../images/industries/7.jpg";
import Eight from "../../../images/industries/8.jpg";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

function Industries() {
    const image_labels = document.querySelectorAll("label");

    const radio = useRef()

    useEffect(()=>{
        radio.current.checked = true
    },[])
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    function showSlides(n) {
        var i;
        var slides = document.querySelectorAll("#slider input[type='radio']");
        if (image_labels === null || slides.length === 0) return;
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].checked = false;
        }
        slides[slideIndex - 1].checked = true;
    }
    return (
        <section id="industries">
            <div className="text-center content">
                <h1 className="mb-4 font-weight-bold head-text">Industries We Serve</h1>
                <p className="mx-auto mb-4">
                    We serve numerous industries including: Law Firms, Health Care, Dealerships,
                    E-Commerce Businesses, Education, Real Estate, Home Improvements and more. Our
                    Industry trained representatives will engage with your customers through live
                    chat and provide you with a Qualified Lead including their Contact information,
                    Location and Concerns.
                </p>

                <div className="slider" id="slider">
                    <button
                        className="prev"
                        onClick={() => {
                            plusSlides(-1);
                        }}
                    >
                        <FaCaretLeft />
                    </button>
                    <button
                        className="next"
                        onClick={() => {
                            plusSlides(1);
                        }}
                    >
                        <FaCaretRight />
                    </button>
                    <input type="radio" name="slider" id="s1" className="input" ref={radio} />
                    <input type="radio" name="slider" id="s2" className="input" />
                    <input type="radio" name="slider" id="s3" className="input" />
                    <input type="radio" name="slider" id="s4" className="input" />
                    <input type="radio" name="slider" id="s5" className="input" />
                    <input type="radio" name="slider" id="s6" className="input" />
                    <input type="radio" name="slider" id="s7" className="input" />
                    <input type="radio" name="slider" id="s8" className="input" />

                    <label htmlFor="s1" id="slide1">
                        <a className="venobox" href={One} data-title="Legal" data-gall="industries">
                            <img src={One} alt="" />
                        </a>
                    </label>
                    <label htmlFor="s2" id="slide2">
                        <a
                            className="venobox"
                            href={Two}
                            data-title="Home Improvements"
                            data-gall="industries"
                        >
                            <img src={Two} alt="" />
                        </a>
                    </label>
                    <label htmlFor="s3" id="slide3">
                        <a
                            className="venobox"
                            href={Three}
                            data-title="Health Care"
                            data-gall="industries"
                        >
                            <img src={Three} alt="" />
                        </a>
                    </label>
                    <label htmlFor="s4" id="slide4">
                        <a
                            className="venobox"
                            href={Four}
                            data-title="Event Planner"
                            data-gall="industries"
                        >
                            <img src={Four} alt="" />
                        </a>
                    </label>
                    <label htmlFor="s5" id="slide5">
                        <a
                            className="venobox"
                            href={Five}
                            data-title="Education"
                            data-gall="industries"
                        >
                            <img src={Five} alt="" />
                        </a>
                    </label>
                    <label htmlFor="s6" id="slide6">
                        <a
                            className="venobox"
                            href={Six}
                            data-title="E-commerce"
                            data-gall="industries"
                        >
                            <img src={Six} alt="" />
                        </a>
                    </label>
                    <label htmlFor="s7" id="slide7">
                        <a
                            className="venobox"
                            href={Seven}
                            data-title="Auto Dealer"
                            data-gall="industries"
                        >
                            <img src={Seven} alt="" />
                        </a>
                    </label>
                    <label htmlFor="s8" id="slide8">
                        <a
                            className="venobox"
                            href={Eight}
                            data-title="Real Estate"
                            data-gall="industries"
                        >
                            <img src={Eight} alt="" />
                        </a>
                    </label>

                    <div className="s1 labels">
                        <h1>Legal</h1>
                    </div>
                    <div className="s2 labels">
                        <h1>Home Improvements</h1>
                    </div>
                    <div className="s3 labels">
                        <h1>Health Care</h1>
                    </div>
                    <div className="s4 labels">
                        <h1>Event Planner</h1>
                    </div>
                    <div className="s5 labels">
                        <h1>Education</h1>
                    </div>
                    <div className="s6 labels">
                        <h1>E-commerce</h1>
                    </div>
                    <div className="s7 labels">
                        <h1>Auto Dealer</h1>
                    </div>
                    <div className="s8 labels">
                        <h1>Real Estate</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Industries;
