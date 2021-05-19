import { createContext, useEffect, useState } from "react";
export const PostContext = createContext();
function PostsBlock({ children }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
    useEffect(() => {
        async function getPosts() {
            try {
                let data = await fetch("https://chatcloud.co/wp-json/wp/v2/posts");
                data = await data.json();
                setPosts(data);
            } catch (err) {
                console.log(err);
            }
        }

        getPosts();
    }, []);

    useEffect(() => {
        posts &&
            posts.forEach(async (a, index) => {
                return await fetch(`https://chatcloud.co/wp-json/wp/v2/posts`)
                    .then((d) => d.json())
                    .then(
                        async (d) =>
                            await fetch(d[index]._links["wp:attachment"][0].href)
                                .then((d) => d.json())
                                .then((d) =>
                                    setImages((prev) => {
                                        return [...prev, d[0].source_url];
                                    })
                                )
                    );
            });
    }, [posts]);

    useEffect(() => {
        let postHelper = [];
        if (images.length === posts.length) {
            postHelper = posts.map((post, index) => {
                post.imgUrl = images[index];
                return post;
            });
            console.log(postHelper);
            setPosts(postHelper);
            setLoading(false);
        }
    }, [images]);

    return (
        <PostContext.Provider value={{ posts, setPosts, loading, setLoading }}>
            {children}
        </PostContext.Provider>
    );
}

export default PostsBlock;
