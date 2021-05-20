import { createContext, useEffect, useState } from "react";
export const PostContext = createContext();
function PostsBlock({ children }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const pages_url =
        "https://chatcloud.co/wp-json/wp/v2/pages?per_page=30&orderby=slug&_embed=true&wp_attachment=true";
    useEffect(() => {
        fetch("https://chatcloud.co/wp-json/wp/v2/media?per_page=30")
            .then((d) => d.json())
            .then((d) => console.log(d));
        async function getPosts() {
            try {
                let data = await fetch("https://chatcloud.co/wp-json/wp/v2/posts?_embed");
                data = await data.json();
                setPosts(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        getPosts();
    }, []);

    return (
        <PostContext.Provider value={{ posts, setPosts, loading, setLoading }}>
            {children}
        </PostContext.Provider>
    );
}

export default PostsBlock;
