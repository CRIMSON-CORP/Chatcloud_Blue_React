import { createContext, useEffect, useState } from "react";
import { store } from "react-notifications-component";
export const PostContext = createContext();

async function sortData(data) {
    return Promise.resolve(
        data.sort((a, b) => {
            if (a.slug.toLowerCase() < b.slug.toLowerCase()) return -1;
            else if (a.slug.toLowerCase() > b.slug.toLowerCase()) return 1;
            else return 0;
        })
    );
}

function Notification(type, title, message) {
    store.addNotification({
        title,
        message,
        type,
        container: "top-left",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration: 2000,
            touch: true,
            click: true,
        },
    });
}

function PostsBlock({ children }) {
    const [posts, setPosts] = useState([]);
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);

    const pages_url =
        "https://chatcloud.co/wp-json/wp/v2/pages?per_page=30&orderby=slug&order=asc&_embed=true&exclude=10161,10608,8972,9715,10982,10582,10394,10394,10618";

    const posts_url = "https://chatcloud.co/wp-json/wp/v2/posts?_embed";
    useEffect(() => {
        function fetchData() {
            async function getPosts() {
                return new Promise(async (res, rej) => {
                    try {
                        let data = await fetch(posts_url);
                        data = await data.json();
                        res(data);
                    } catch (err) {
                        rej("Error");
                    }
                });
            }
            async function getPages() {
                return new Promise(async (res, rej) => {
                    try {
                        let data = await fetch(pages_url);
                        data = await data.json();
                        res(await sortData(data));
                    } catch (err) {
                        console.log(err);
                        rej("Error");
                    }
                });
            }
            Promise.all([getPosts(), getPages()])
                .then((data) => {
                    setPosts(data[0]);
                    setPages(data[1]);
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(true);
                    Notification(
                        "danger",
                        "No Connection",
                        `You have no Internet Connection or its unstable, Retrying...`
                    );
                    setTimeout(() => {
                        fetchData();
                    }, 5000);
                });
        }
        fetchData();
    }, []);

    return (
        <PostContext.Provider value={{ posts, setPosts, loading, setLoading, pages, setPages }}>
            {children}
        </PostContext.Provider>
    );
}

export default PostsBlock;
