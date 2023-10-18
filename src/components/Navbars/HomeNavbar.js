import React from "react";
import {Link} from "react-router-dom";
import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    UncontrolledTooltip,
} from "reactstrap";
import HeaderLogo from '../../assets/img/now-logo.svg';
import USFlag from '../../assets/img/flags/US.svg';

function HomeNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 399 ||
                document.body.scrollTop > 399
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 400 ||
                document.body.scrollTop < 400
            ) {
                setNavbarColor("navbar-transparent");
            }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <>
            {collapseOpen ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar className={"fixed-top " + navbarColor} expand="lg">
                <Container className="d-flex justify-content-between align-items-center home-nav-container">
                    <div className="navbar-translate">
                        <NavbarBrand
                            href="https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-index-navbar"
                            target="_blank"
                            id="navbar-brand"
                        >
                            <img src={HeaderLogo} />
                        </NavbarBrand>
                        <button
                            className="navbar-toggler navbar-toggler"
                            onClick={() => {
                                document.documentElement.classList.toggle("nav-open");
                                setCollapseOpen(!collapseOpen);
                            }}
                            aria-expanded={collapseOpen}
                            type="button"
                        >
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <Collapse
                        className="justify-content-end"
                        isOpen={collapseOpen}
                        navbar
                    >
                        <Nav navbar>
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    caret
                                    color="default"
                                    href="#pablo"
                                    nav
                                    onClick={(e) => e.preventDefault()}
                                    className="d-flex align-items-center home-lang-select"
                                >
                                    <img src={USFlag} className="design_app mr-2" style={{marginRight: '5px'}}/>
                                    <p>English</p>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem to="/index" tag={Link}>
                                        <img src={USFlag} className="design_app mr-2" style={{marginRight: '5px'}}/>
                                        <p>English</p>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <Button
                                    className="nav-link btn-neutral btn-outline-light"
                                    href="https://www.creative-tim.com/product/now-ui-kit-pro-react?ref=nukr-index-navbar"
                                    id="upgrade-to-pro"
                                    target="_blank"
                                >
                                    Live Chat
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default HomeNavbar;
