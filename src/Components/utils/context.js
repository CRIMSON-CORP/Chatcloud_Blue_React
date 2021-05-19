import { createContext, useEffect, useState } from "react";
export const PostContext = createContext();
function PostsBlock({ children }) {
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getPosts() {
            try {
                let data = await fetch("https://chatcloud.co/wp-json/wp/v2/posts");
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
