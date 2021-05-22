import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { PostContext } from "../../utils/context";
import { NavBarAnim } from "../../utils/gsap";
import $ from "jquery";
function NavBar({ white }) {
    useEffect(() => {
        NavBarAnim();
        const links = document.querySelectorAll("li.navlinkItem a");
        for (let index = 0; index < links.length; index++) {
            links[index].addEventListener("click", function () {
                $("svg.mobile_nav").removeClass("open");
                document.querySelector("body").scrollTop = 0;
                window.scrollTo({
                    top: 0,
                });
            });
        }
    }, []);
    const { pages } = useContext(PostContext);

    const pagesJSX = pages.map(({ slug, title: { rendered } }, index) => {
        return (
            <li key={index}>
                <NavLink activeClassName="active" to={`/${slug}`} className="list-group-item">
                    {rendered}
                </NavLink>
            </li>
        );
    });
    return (
        <header
            className={`d-flex justify-content-between p-3 px-5 align-items-center ${
                white ? "white" : ""
            }`}
        >
            <div className={`logo pop ${white && "blue"}`}>
                <a href="/">Chatcloud</a>
            </div>
            <svg viewBox="0 0 78 43.5" className={`mobile_nav ${white ? "blue" : ""}`}>
                <line className="cls-1 one" y1="2.5" x2="78" y2="2.5" />
                <line className="cls-1 two" y1="21.75" x2="78" y2="21.75" />
                <line className="cls-1 three" y1="41" x2="78" y2="41" />
            </svg>
            <nav className="d-flex align-items-center">
                <ul className="navlinks pop list-unstyled d-flex align-items-center m-0">
                    <li className="navlinkItem home">
                        <NavLink to="/" activeClassName="active" exact>
                            Home
                        </NavLink>
                    </li>
                    <li className="navlinkItem">
                        <NavLink to="/services" activeClassName="active">
                            Services
                        </NavLink>
                    </li>
                    <li className="navlinkItem link-drop">
                        <NavLink
                            to="/industries"
                            activeClassName="active"
                            id="ind_dropList"
                            onClick={(e) => {
                                if (window.innerWidth <= 1000) {
                                    e.preventDefault();
                                }
                            }}
                        >
                            Industries
                        </NavLink>
                        <div className="dropdown shadow">
                            <ul className="list-unstyled">{pagesJSX}</ul>
                        </div>
                    </li>
                    <li className="navlinkItem">
                        <NavLink to="/pricing" activeClassName="active">
                            Pricing
                        </NavLink>
                    </li>
                    <li className="navlinkItem">
                        <NavLink to="/contact-us" activeClassName="active">
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
