import React, { useContext, useEffect, useRef } from "react";
import { PostContext } from "../utils/context";
import { Link, Route } from "react-router-dom";
import NavBar from "./Homepage/NavBar";
import { Markup } from "interweave";
import { gsap } from "gsap";
import GetStared from "./Homepage/GetStared";
function BlogPost() {
    const { posts } = useContext(PostContext);
    useEffect(() => {
        document.querySelector("body").classList.add("blog");
        return () => {
            document.querySelector("body").classList.remove("blog");
        };
    }, []);

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
    const postsJSX = posts.map(({ slug, date, content, title, imgUrl }, index) => {
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
                <main className="px-0 px-md-5">
                    <div className="blog-title  px-4 pt-5 px-md-5 blog_head" ref={Blog_head}>
                        <div className="text-white mt-0 mb-3 display-2 head">
                            <Markup content={title.rendered} />
                        </div>
                        <p className="date-posted">Posted on {formatDate(new Date(date))}</p>
                    </div>
                    <div className="grid my-3 h-100 px-md-5 px-4 mb-4">
                        <div className="w-100">
                            <img
                                src={imgUrl}
                                alt=""
                                className="w-100"
                                style={{ objectPosition: "25% 50%" }}
                                ref={Idn_image}
                            />
                        </div>
                        <div className="content mb-5  mt-lg-0" ref={Idn_content}>
                            <Markup content={content.rendered} tagName={"fragment"} />
                        </div>
                    </div>
                </main>

                <div className="other-posts p-md-5 px-3 px-md-4 pb-5">
                    <div className="wrapper">
                        <div className="row posts">
                            {others.map(({ excerpt, slug, title, imgUrl }, index) => {
                                return (
                                    <Card
                                        link={slug}
                                        h4={title.rendered}
                                        p={excerpt.rendered}
                                        key={index}
                                        img={imgUrl}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Route>
        );
    });
    return (
        <>
            <NavBar white={true} />
            {postsJSX}
            <GetStared />
        </>
    );
}

export default BlogPost;

function Card({ h4, p, link, img }) {
    return (
        <div className="col-md-4">
            <div className="card shadow border-0 rounded-0">
                <img className="card-img-top  rounded-0" src={img} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{<Markup content={h4} tagName={"fragment"} />}</h4>
                    <div className="card-text">{<Markup content={p} tagName={"fragment"} />}</div>
                    <button className="btn read_more  slide invert shadow">
                        <span className="text">
                            <Link
                                to={`/${link}`}
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        scrollBehavior: "auto",
                                    });
                                }}
                            >
                                Read more...
                            </Link>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
