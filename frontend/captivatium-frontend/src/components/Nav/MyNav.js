import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { IndexLinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import { FaGithub, FaInstagram } from "react-icons/fa";
import About from "../About/About";
import GalleryPage from "../Gallery/GalleryPage";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import logo from "../../assets/logo_navbar.svg";
import logo_mobile from "../../assets/logo_navbar_mobile.svg";
import "./myNav.scss";

export default function MyNav() {

    return (
        <div className="navbar-wrapper">
            <Router>
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
                            <NavLink className="nav-link" activeClassName="active" to="/about" href="#home">about <div className="underline"></div></NavLink>
                            <NavLink className="nav-link" activeClassName="active" to="/gallery" href="#link">gallery <div className="underline"></div></NavLink>
                            <NavLink className="nav-link" activeClassName="active" to="/projects" href="#link">projects <div className="underline"></div></NavLink>
                            <NavLink className="nav-link" activeClassName="active" to="/contact" href="#link">contact <div className="underline"></div></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav className="navbar-icons">
                        <a className="mr-3" href="https://instagram.com/captivatium" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="https://github.com/AbelHristodor" target="_blank" rel="noreferrer"><FaGithub /></a>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/gallery" component={GalleryPage} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </Router>
        </div>
    );
}
