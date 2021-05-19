import React from "react";
import home_video from "../../../images/hero_Slider/mixkit-texting-while-riding-a-train-21834-medium-1.webm";
import law_firms from "../../../images/hero_Slider/law_firms.jpg";
import education from "../../../images/hero_Slider/education.jpg";
import health_care from "../../../images/hero_Slider/health_care.jpg";
import home_improvements from "../../../images/hero_Slider/Home-Improvements.jpg";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
function Hero() {
    SwiperCore.use([Autoplay]);
    return (
        <div id="hero" className="container-fluid px-5 home">
            <span className="bg"></span>
            <div className="hero_slider swiper-container">
                <Swiper
                    className="hero-slider-wrapper swiper-wrapper"
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    direction={"vertical"}
                    autoplay={{
                        delay: 5000,
                    }}
                    allowTouchMove={false}
                    speed={1300}
                >
                    {/* <!-- slider1 --> */}
                    <SwiperSlide className="hero-slider-item d-flex align-items-center justify-content-start h-100 w-100 swiper-slide">
                        <div className="background">
                            <video autoPlay={true} loop muted id="hero_vid">
                                <source src={home_video} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="content px-5">
                            <h1 className="font-weight-bold">24/7 Live Chat Services</h1>
                            <p>Increase your sales and engage your visitors via Live Chat.</p>
                            <button className="slide px-3 py-2 text-uppercase rounded">
                                <span className="text">talk to us now</span>
                            </button>
                        </div>
                    </SwiperSlide>
                    {/* <!-- slider2 --> */}
                    <SwiperSlide className="hero-slider-item d-flex align-items-center justify-content-start h-100 w-100 swiper-slide">
                        <div className="background">
                            <img src={law_firms} alt="" />
                        </div>
                        <div className="content px-5">
                            <h1 className="font-weight-bold">Law Firms</h1>
                            <p>
                                Don't miss leads of your website visitors. Every potential client
                                with a case, visits to your website first with many questions that
                                need to be instantly answered via Live Chat.
                            </p>
                            <button className="slide px-3 py-2 text-uppercase rounded">
                                <span className="text">talk to us now</span>
                            </button>
                        </div>
                    </SwiperSlide>
                    {/* <!-- slider3 --> */}
                    <SwiperSlide className="hero-slider-item d-flex align-items-center justify-content-start h-100 w-100 swiper-slide">
                        <div className="background">
                            <img src={health_care} alt="" />
                        </div>
                        <div className="content px-5">
                            <h1 className="font-weight-bold">Health Care</h1>
                            <p>
                                Live Chat helps you get 40% more conversion of new patients. You may
                                not be available to capture contact details of your new patients but
                                we got you covered 24/7.
                            </p>
                            <button className="slide px-3 py-2 text-uppercase rounded">
                                <span className="text">talk to us now</span>
                            </button>
                        </div>
                    </SwiperSlide>
                    {/* <!-- slider4 --> */}
                    <SwiperSlide className="hero-slider-item d-flex align-items-center justify-content-start h-100 w-100 swiper-slide">
                        <div className="background">
                            <img src={home_improvements} alt="" />
                        </div>
                        <div className="content px-5">
                            <h1 className="font-weight-bold">Home Improvement</h1>
                            <p>
                                Many of your customers want instant estimate for the services they
                                are looking for. Get connected with your website visitors using our
                                call connect feature.
                            </p>
                            <button className="slide px-3 py-2 text-uppercase rounded">
                                <span className="text">talk to us now</span>
                            </button>
                        </div>
                    </SwiperSlide>
                    {/* <!-- slider5 --> */}
                    <SwiperSlide className="hero-slider-item d-flex align-items-center justify-content-start h-100 w-100 swiper-slide">
                        <div className="background">
                            <img src={education} alt="" />
                        </div>
                        <div className="content px-5">
                            <h1 className="font-weight-bold">Education</h1>
                            <p>
                                Engage and increase the conversion of New Students through the live
                                chat, who want to enroll in your programs.
                            </p>
                            <button className="slide px-3 py-2 text-uppercase rounded">
                                <span className="text">talk to us now</span>
                            </button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Hero;
