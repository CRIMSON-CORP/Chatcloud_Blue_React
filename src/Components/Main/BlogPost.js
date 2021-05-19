import React, { useContext, useEffect } from "react";
import { PostContext } from "../utils/context";
import { Route } from "react-router-dom";
import NavBar from "./Homepage/NavBar";
import { Markup } from "interweave";
import GetStared from "./Homepage/GetStared";
function BlogPost() {
    const { posts } = useContext(PostContext);
    useEffect(() => {
        document.querySelector("body").classList.add("blog");
        return () => {
            document.querySelector("body").classList.remove("blog");
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

    const postsJSX = posts.map(({ slug, date, content }) => {
        return (
            <Route path={`/${slug}`} exact>
                <main class="px-0 px-md-5">
                    <div class="blog-title  px-4 pt-5 px-md-5 blog_head">
                        <p class="text-white mt-0 mb-3 display-2 head">How Does it Work?</p>
                        <p class="date-posted">Posted on {formatDate(new Date(date))}</p>
                    </div>
                    <div class="grid my-3 h-100 px-md-5 px-4 ">
                        <div class="h-100">
                            <img
                                src="../../img/posts/post_big/4.jpg"
                                alt=""
                                style={{ objectPosition: "25% 50%" }}
                            />
                        </div>
                        <div class="content mb-5  mt-lg-0">
                            <p>
                                <Markup content={content.rendered} />
                            </p>
                        </div>
                    </div>
                </main>
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
