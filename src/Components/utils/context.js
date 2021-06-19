import { createContext, useEffect, useState } from "react";
import { Notification } from "./utils";
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

function PostsBlock({ children }) {
    const [posts, setPosts] = useState([]);
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);

    const issue = {
        issue: false,
        warned: false,
    };

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
                        rej("Error");
                    }
                });
            }
            Promise.all([getPosts(), getPages()])
                .then((data) => {
                    setPosts(data[0]);
                    setPages(data[1]);
                    issue.issue &&
                        Notification(
                            "success",
                            "Connection Restored",
                            `You're back Online!.`,
                            5000
                        );
                })
                .catch((err) => {
                    issue.issue = true;
                    setLoading(false);
                    issue.issue &&
                        !issue.warned &&
                        Notification(
                            "danger",
                            "No Connection",
                            `You have no Internet Connection or its unstable, some Pages may not render Correctly!`,
                            5000
                        );
                    issue.warned = true;
                    setTimeout(() => {
                        fetchData();
                        console.clear();
                    }, 1000);
                })
                .then(() => {
                    setLoading(false);
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
