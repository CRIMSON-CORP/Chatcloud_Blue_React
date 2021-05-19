import React, { useContext } from "react";
import { Link } from "react-router-dom";
import One from "../../../images/posts/One.jpg";
import Two from "../../../images/posts/Two.jpg";
import Three from "../../../images/posts/Three.jpg";
import Four from "../../../images/posts/Four.jpg";
import Five from "../../../images/posts/Five.jpg";
import { PostContext } from "../../utils/context";
import { Markup } from "interweave";
function Posts() {
    const { posts } = useContext(PostContext);

    const images = [One, Two, Three, Four, Five];

    const PostJSX = posts.map(({ slug, img, title: { rendered } }, index) => {
        return <Box link={slug} image={images[index]} text={rendered} key={index} />;
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
