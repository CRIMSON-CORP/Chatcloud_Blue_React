import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../utils/context";
import { Markup } from "interweave";
function Posts() {
    const { posts } = useContext(PostContext);

    const PostJSX = posts.map(({ slug, title: { rendered }, imgUrl }, index) => {
        return <Box link={slug} image={imgUrl} text={rendered} key={index} />;
    });
    return (
        <section id="posts">
            <h1 className="text-center font-weight-bold head-text">Latest Posts</h1>
            <div className="grid">{PostJSX}</div>
        </section>
    );
}

export default Posts;

function Box({ link, image, text }) {
    return (
        <div>
            <Link
                to={link}
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        scrollBehavior: "auto",
                    });
                }}
            >
                <img src={image} alt="" />
                <div className="back">
                    <div>
                        <Markup content={text} />
                    </div>
                </div>
            </Link>
        </div>
    );
}
