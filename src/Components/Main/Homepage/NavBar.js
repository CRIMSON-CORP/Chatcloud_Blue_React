import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavBarAnim } from "../../utils/gsap";
function NavBar({ white }) {
    useEffect(() => {
        NavBarAnim();
    }, []);
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
                        <div className="dropdown">
                            <ul className="list-unstyled">
                                <li>
                                    <a
                                        href="<?php echo get_template_directory_uri(); ?>/pages/industries/autoDealership.php"
                                        className="list-group-item"
                                    >
                                        Auto DealerShip
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="<?php echo get_template_directory_uri(); ?>/pages/industries/Ecommerce.php"
                                        className="list-group-item"
                                    >
                                        E-commerce
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="<?php echo get_template_directory_uri(); ?>/pages/industries/education.php"
                                        className="list-group-item"
                                    >
                                        Education
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="<?php echo get_template_directory_uri(); ?>/pages/industries/event_management.php"
                                        className="list-group-item"
                                    >
                                        Event Management
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="<?php echo get_template_directory_uri(); ?>/pages/industries/healthcare.php"
                                        className="list-group-item"
                                    >
                                        Health Care
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="<?php echo get_template_directory_uri(); ?>/pages/industries/HomeImprovements.php"
                                        className="list-group-item"
                                    >
                                        Home Improvement
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="<?php echo get_template_directory_uri(); ?>/pages/industries/LawFirms.php"
                                        className="list-group-item"
                                    >
                                        Law Firms
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="<?php echo get_template_directory_uri(); ?>/pages/industries/RealEstate.php"
                                        className="list-group-item"
                                    >
                                        Real Estate
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="navlinkItem">
                        <NavLink to="/pricing" activeClassName="active">
                            Pricing
                        </NavLink>
                    </li>
                    <li className="navlinkItem">
                        <NavLink to="/contact" activeClassName="active">
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
