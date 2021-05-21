import { createContext, useEffect, useState } from "react";
export const PostContext = createContext();
function PostsBlock({ children }) {
    const [posts, setPosts] = useState([]);
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);

    async function sortData(data) {
        return Promise.resolve(
            data.sort((a, b) => {
                if (a.slug.toLowerCase() < b.slug.toLowerCase()) return -1;
                else if (a.slug.toLowerCase() > b.slug.toLowerCase()) return 1;
                else return 0;
            })
        );
    }

    const pages_url =
        "https://chatcloud.co/wp-json/wp/v2/pages?per_page=30&orderby=slug&order=asc&_embed=true&exclude=10161,10608,8972,9715,10982,10582,10394,10394,10618";

    const posts_url = "https://chatcloud.co/wp-json/wp/v2/posts?_embed";
    useEffect(() => {
        // fetch(pages_url)
        //     .then((d) => d.json())
        //     .then((d) => console.log(d));
        async function getPosts() {
            try {
                let data = await fetch(posts_url);
                data = await data.json();
                setPosts(data);
            } catch (err) {
                console.log(err);
            }
        }
        async function getPages() {
            try {
                let data = await fetch(pages_url);
                data = await data.json();
                console.log(await sortData(data));
                setPages(await sortData(data));
            } catch (err) {
                console.log(err);
            }
        }
        Promise.all([getPosts(), getPages()]).then(() => {
            setLoading(false);
        });
    }, []);

    return (
        <PostContext.Provider value={{ posts, setPosts, loading, setLoading, pages, setPages }}>
            {children}
        </PostContext.Provider>
    );
}

export default PostsBlock;
