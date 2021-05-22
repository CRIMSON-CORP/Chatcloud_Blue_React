import React, { useContext, useEffect, useRef } from "react";
import { PostContext } from "../utils/context";
import { Link, Route } from "react-router-dom";
import NavBar from "./Homepage/NavBar";
import { Markup } from "interweave";
import { gsap } from "gsap";
import GetStared from "./Homepage/GetStared";
function BlogPost() {
    const { posts, pages } = useContext(PostContext);
    useEffect(() => {
        document.querySelector("body").classList.add("blog");
        document.querySelector("body").classList.add("industries");
        return () => {
            document.querySelector("body").classList.remove("blog");
            document.querySelector("body").classList.remove("industries");
        };
    }, []);

    function formatDate(date) {
        var monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return monthNames[monthIndex] + " " + day + " " + year;
    }
    const postsJSX = posts.map(({ slug, date, content, title, _embedded }, index) => {
        let others = [...posts];
        if (index === posts.length - 1) {
            others = [posts[index - 3], posts[index - 2], posts[index - 1]];
        } else if (index === 0) {
            others = [posts[index + 1], posts[index + 2], posts[index + 3]];
        } else if (index === posts.length - 2) {
            others = [posts[index - 2], posts[index - 1], posts[index + 1]];
        } else if (index === 1) {
            others = [posts[index - 1], posts[index + 1], posts[index + 2]];
        } else {
            others = [posts[index - 2], posts[index - 1], posts[index + 1]];
        }
        return (
            <Route path={`/${slug}`} exact key={index}>
                <Main
                    title={title}
                    date={date}
                    imgUrl={_embedded["wp:featuredmedia"][0].source_url}
                    formatDate={formatDate}
                    content={content}
                />
                <div className="other-posts p-md-5 px-3 px-md-4 pb-5">
                    <div className="wrapper">
                        <div className="row posts">
                            {others.map(({ excerpt, slug, title, imgUrl, _embedded }, index) => {
                                return (
                                    <Card
                                        link={slug}
                                        h4={title.rendered}
                                        p={excerpt.rendered}
                                        key={index}
                                        img={_embedded["wp:featuredmedia"][0].source_url}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Route>
        );
    });

    const pagesJSX = pages.map(({ slug, date, content, title, _embedded }, index) => {
        return (
            <Route path={`/${slug}`} exact key={index}>
                <MainPages
                    title={title}
                    date={date}
                    imgUrl={_embedded["wp:featuredmedia"][0].source_url}
                    content={content}
                />
            </Route>
        );
    });
    return (
        <>
            <NavBar white={true} />
            {postsJSX}
            {pagesJSX}
            <GetStared />
        </>
    );
}

export default BlogPost;

function Card({ h4, p, link, img }) {
    return (
        <div className="col-md-4">
            <div className="card shadow border-0 rounded-0">
                <img className="card-img-top  rounded-0" src={img} alt="Card" />
                <div className="card-body">
                    <h4 className="card-title">{<Markup content={h4} tagName={"fragment"} />}</h4>
                    <div className="card-text">{<Markup content={p} tagName={"fragment"} />}</div>
                    <Link
                        to={`/${link}`}
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                scrollBehavior: "auto",
                            });
                        }}
                    >
                        <button className="btn read_more  slide invert shadow">
                            <span className="text">Read more...</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function Main({ title, date, imgUrl, formatDate, content }) {
    const Idn_image = useRef();
    const Idn_content = useRef();
    const Blog_head = useRef();

    useEffect(() => {
        const timeline = gsap.timeline({});
        Blog_head.current &&
            Idn_content.current &&
            Idn_image.current &&
            timeline
                .from(Blog_head.current.children, {
                    y: 50,
                    opacity: 0,
                    ease: "power4.Out",
                    duration: 0.75,
                    delay: 0.5,
                    stagger: { each: 0.25 },
                })
                .to(
                    Idn_image.current,
                    {
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        ease: "power4.inOut",
                        duration: 2.5,
                    },
                    "-=0.5"
                )
                .from(
                    Idn_content.current.children,
                    {
                        y: 50,
                        opacity: 0,
                        ease: "power4.Out",
                        duration: 0.75,
                        stagger: { each: 0.125 },
                    },
                    "-=1.5"
                );
    }, []);
    return (
        <main className="px-0 px-md-5">
            <div className="blog-title  px-3 pt-5 px-md-5 blog_head" ref={Blog_head}>
                <div className="text-white mt-0 mb-3 display-2 head">
                    <Markup content={title.rendered} />
                </div>
                <p className="date-posted">Posted on {formatDate(new Date(date))}</p>
            </div>
            <div className="grid my-3 h-100 px-md-5 px-3 mb-4">
                <div className="h-100 mb-3">
                    <img
                        src={imgUrl}
                        alt=""
                        style={{ objectPosition: "25% 50%" }}
                        ref={Idn_image}
                    />
                </div>
                <div className="content mb-5  mt-lg-0" ref={Idn_content}>
                    <Markup content={content.rendered} tagName={"fragment"} />
                </div>
            </div>
        </main>
    );
}

function MainPages({ title, imgUrl, content }) {
    const Idn_image = useRef();
    const Idn_content = useRef();
    const Blog_head = useRef();

    useEffect(() => {
        document.querySelector("body").classList.add("page");
        return () => {
            document.querySelector("body").classList.remove("page");
        };
    }, []);

    useEffect(() => {
        const timeline = gsap.timeline({});
        Blog_head.current &&
            Idn_content.current &&
            Idn_image.current &&
            timeline
                .from(Blog_head.current.children, {
                    y: 50,
                    opacity: 0,
                    ease: "power4.Out",
                    duration: 0.75,
                    delay: 0.5,
                    stagger: { each: 0.25 },
                })
                .to(
                    Idn_image.current,
                    {
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                        ease: "power4.inOut",
                        duration: 2.5,
                    },
                    "-=0.5"
                )
                .from(
                    Idn_content.current.children,
                    {
                        y: 50,
                        opacity: 0,
                        ease: "power4.Out",
                        duration: 0.75,
                        stagger: { each: 0.125 },
                    },
                    "-=1.5"
                );
    }, []);
    return (
        <main>
            <div className="grid p-0 my-5 mb-0 h-100">
                <div className="row h-100">
                    <img src={imgUrl} ref={Idn_image} alt="" />
                </div>
                <div className="content mb-5" ref={Idn_content}>
                    <div className="subheader font-weight-bolder" ref={Blog_head}>
                        <Markup content={title.rendered} />
                    </div>
                    <Markup content={content.rendered} />
                </div>
            </div>
        </main>
    );
}
