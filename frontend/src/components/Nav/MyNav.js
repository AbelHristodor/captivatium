import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { IndexLinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo_navbar.svg";
import logo_mobile from "../../assets/logo_navbar_mobile.svg";
import "./myNav.scss";

export default function MyNav() {
    return (
        <div className="navbar-wrapper">
            <Navbar variant="dark" expand="lg">
                <IndexLinkContainer to="/" >
                    <Navbar.Brand>
                        <img
                            alt="Captivatium Logo"
                            src={logo}
                            width="150"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        <img
                            alt="Captivatium Logo"
                            src={logo_mobile}
                            width="30"
                            height="30"
                            className="d-inline-block align-top mobile-only"
                        />{" "}
                    </Navbar.Brand>
                </IndexLinkContainer>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="navbar-menu ml-auto" activeKey={useLocation.name}>
                        <NavLink className="nav-link" activeClassName="active" to="/gallery" href="#link">gallery <div className="underline"></div></NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/about" href="#link">about me<div className="underline"></div></NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/contact" href="#link">contact <div className="underline"></div></NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="navbar-icons">
                    <a className="mr-3" href="https://instagram.com/captivatium" target="_blank" rel="noreferrer" alt="Instagram"><FaInstagram /></a>
                    <a href="https://github.com/AbelHristodor" target="_blank" rel="noreferrer" alt="Github"><FaGithub /></a>
                </Nav>
            </Navbar>
        </div>
    );
}
