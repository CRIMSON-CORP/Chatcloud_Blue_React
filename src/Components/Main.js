import React, { useContext } from "react";
import { Route, Switch } from "react-router";
import BlogPost from "./Main/BlogPost";
import Homepage from "./Main/Homepage";
import Contact from "./Main/Homepage/Contact";
import Footer from "./Main/Homepage/Footer";
import GetStared from "./Main/Homepage/GetStared";
import Industries from "./Main/Homepage/Industries";
import NavBar from "./Main/Homepage/NavBar";
import Services from "./Main/Homepage/Services";
import { PostContext } from "./utils/context";

function Main() {
    const { loading } = useContext(PostContext);

    return loading ? (
        <div className="loader">
            <span></span>
        </div>
    ) : (
        <>
            <Switch>
                <Route path="/services">
                    <NavBar white={true} />
                    <Services />
                    <GetStared />
                </Route>
                <Route path="/industries">
                    <NavBar white={true} />
                    <Industries />
                    <GetStared />
                </Route>
                <Route path="/contact">
                    <NavBar white={true} />
                    <Contact />
                </Route>
                <Route path="/" exact>
                    <NavBar />
                    <Homepage />
                </Route>
                <BlogPost />
            </Switch>
            <Footer />
        </>
    );
}
export default Main;
