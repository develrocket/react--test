import React, {useState} from "react";
import CommonNavbar from "../components/Navbars/CommonNavbar";
import {
    Button,
    Carousel,
    CarouselIndicators,
    CarouselItem,
    Col, DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    Row, UncontrolledDropdown
} from "reactstrap";
import IconArrowLeft from "../assets/img/icons/icon_arrow_left_gray.svg";
import IconArrowRight from "../assets/img/icons/icon_arrow_right_green.svg";
import IconLocation from "../assets/img/icons/icon_outline_place.svg";
import IconStarRate from "../assets/img/icons/icon_star_rate.svg";
import USFlag from "../assets/img/flags/US.svg";
import {Link} from "react-router-dom";

const items = ['name', 'contact', 'gender', 'birth', 'country', 'photograph', 'mail', 'info', 'payment']

function RegisterStep() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex: any) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item, index) => {
        if (item == 'name') {
            return (
                <CarouselItem
                    onExiting={() => setAnimating(true)}
                    onExited={() => setAnimating(false)}
                    key={index}
                >
                    <div className="register-form-container">
                        <p className="title">2.1. - Name </p>
                        <div className="input-box">
                            <Input placeholder="your name" />
                        </div>
                        <Button>Ok <i className="now-ui-icons ui-1_check"></i></Button>
                    </div>

                </CarouselItem>
            );
        }
        if (item == 'contact') {
            return (
                <CarouselItem
                    onExiting={() => setAnimating(true)}
                    onExited={() => setAnimating(false)}
                    key={index}
                >
                    <div className="register-form-container">
                        <p className="title">2.2. - Phone number </p>
                        <div className="input-box">
                            <UncontrolledDropdown>
                                <DropdownToggle
                                    caret
                                    color="default"
                                    href="#pablo"
                                    nav
                                    onClick={(e) => e.preventDefault()}
                                    className="d-flex align-items-center home-lang-select"
                                >
                                    <img src={USFlag} className="design_app mr-2" style={{marginRight: '5px'}}/>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem to="/index" tag={Link}>
                                        <img src={USFlag} className="design_app mr-2" style={{marginRight: '5px'}}/>
                                        <p>USA</p>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <Input placeholder="your phone number" />
                        </div>
                        <Button>Ok <i className="now-ui-icons ui-1_check"></i></Button>
                    </div>

                </CarouselItem>
            );
        }
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <div className="register-form-container">
                    {item}
                </div>

            </CarouselItem>
        );
    });

    return (
        <>
            <CommonNavbar />
            <div className="wrapper">
                <div className="section section-land">
                    <Row>
                        <Col sm={4}>
                            <div className="left-container">
                                <ul className="progress-step">
                                    <li className={'progress__item ' + (activeIndex > 0 ? 'progress__item--completed' : (activeIndex == 0 ? 'progress__item--active' : ''))}>
                                        <p className="progress__title">Name</p>
                                    </li>
                                    <li className={'progress__item ' + (activeIndex > 1 ? 'progress__item--completed' : (activeIndex == 1 ? 'progress__item--active' : ''))}>
                                        <p className="progress__title">Contact Information</p>
                                    </li>
                                    <li className={'progress__item ' + (activeIndex > 2 ? 'progress__item--completed' : (activeIndex == 2 ? 'progress__item--active' : ''))}>
                                        <p className="progress__title">Gender</p>
                                    </li>
                                    <li className={'progress__item ' + (activeIndex > 3 ? 'progress__item--completed' : (activeIndex == 3 ? 'progress__item--active' : ''))}>
                                        <p className="progress__title">Birth Information</p>
                                    </li>
                                    <li className={'progress__item ' + (activeIndex > 4 ? 'progress__item--completed' : (activeIndex == 4 ? 'progress__item--active' : ''))}>
                                        <p className="progress__title">Country of Eligibility</p>
                                    </li>
                                    <li className={'progress__item ' + (activeIndex > 5 ? 'progress__item--completed' : (activeIndex == 5 ? 'progress__item--active' : ''))}>
                                        <p className="progress__title">Photograph</p>
                                    </li>
                                    <li className={'progress__item ' + (activeIndex > 6 ? 'progress__item--completed' : (activeIndex == 6 ? 'progress__item--active' : ''))}>
                                        <p className="progress__title">Mailing Address</p>
                                    </li>
                                    <li className={'progress__item ' + (activeIndex > 7 ? 'progress__item--completed' : (activeIndex == 7 ? 'progress__item--active' : ''))}>
                                        <p className="progress__title">Additional Information</p>
                                    </li>
                                    <li className={'progress__item ' + (activeIndex > 8 ? 'progress__item--completed' : (activeIndex == 8 ? 'progress__item--active' : ''))}>
                                        <p className="progress__title">Payment</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <div className="right-container d-flex align-items-center justify-content-center" style={{height: '100%', paddingBottom: '126px', position: 'relative'}}>
                                <div style={{width: '100%', padding: '0 100px'}}>
                                    <Carousel
                                        activeIndex={activeIndex}
                                        next={next}
                                        previous={previous}
                                        interval={false}
                                    >
                                        {slides}

                                        <div className="carousel-custom-control">
                                            <a onClick={previous}>
                                                <i className="now-ui-icons arrows-1_minimal-up"></i>
                                            </a>
                                            <a onClick={next}>
                                                <i className="now-ui-icons arrows-1_minimal-down"></i>
                                            </a>
                                        </div>
                                    </Carousel>
                                </div>

                                <div style={{position: 'absolute', bottom: 0, right: 0, fontSize: '16px', color: '#01264A', height: '50px'}}>
                                    Copyright © 2016-2023 GovAssist, LLC All Rights Reserved
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default RegisterStep;
