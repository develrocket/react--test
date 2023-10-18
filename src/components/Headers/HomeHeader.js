/*eslint-disable*/
import React, {useEffect} from "react";
import {
    Container,
    Row,
    Col, Input, Button
} from "reactstrap";

import IconPeople from '../../assets/img/icons/icon_people.svg';
import IconMedal from '../../assets/img/icons/icon_medal_star.svg';
import IconWallet from '../../assets/img/icons/icon_wallet_check.svg';
import IconClock from '../../assets/img/icons/icon_clock.svg';
import IconMessage from '../../assets/img/icons/icon_message.svg';
import IconLove from '../../assets/img/icons/icon_love.svg';
import IconArrowRight from '../../assets/img/icons/icon_arrow_right_1.svg';

function HomeHeader() {
    let pageHeader = React.createRef();

    useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    }, []);

    return (
        <>
            <div className="page-header clear-filter">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: "url(" + require("../../assets/img/header.jpg") + ")"
                    }}
                    ref={pageHeader}
                ></div>
                <Container>
                    <Row className="content-center">
                        <Col className="home-header-left">
                            <div className="home-title">
                                <p>Win the right to live</p>
                                <p>in the USA!</p>
                            </div>

                            <div className="left-info-container">
                                <div>
                                    The official deadline is running, so hurry up and <a>apply here!</a>
                                </div>

                                <div>
                                    <div className="info-item">
                                        <p>27</p>
                                        <p>DAYS</p>
                                    </div>
                                    <div className="info-item">
                                        <p>24</p>
                                        <p>HOURS</p>
                                    </div>
                                    <div className="info-item">
                                        <p>60</p>
                                        <p>MINUTES</p>
                                    </div>
                                    <div className="info-item">
                                        <p>60</p>
                                        <p>SECONDS</p>
                                    </div>
                                </div>
                            </div>

                            <div className="left-desc-container">
                                <div>
                                    <img src={IconPeople} />
                                    50,000 people and their families will Live, Work and Study in USA.
                                </div>
                                <div>
                                    <img src={IconMedal} />
                                    OFFICIAL USA Governmental program.
                                </div>
                                <div>
                                    <img src={IconWallet} />
                                    Your chance to LIVE, WORK & STUDY in USA.
                                </div>
                                <div>
                                    <img src={IconClock} />
                                    Simple <a>registration</a> within 5 minutes.
                                </div>
                                <div>
                                    <img src={IconMessage} />
                                    Personal support in every step.
                                </div>
                                <div>
                                    <img src={IconLove} />
                                    Double chance for married people to win the Green Card.
                                </div>
                            </div>
                        </Col>
                        <Col className="home-header-right">
                            <div className="header-form-container">
                                <a className="top-link">
                                    <img src={IconArrowRight} />
                                    Check now for free!
                                </a>

                                <p className="form-title">
                                    Green card eligibility
                                </p>

                                <div className="form-input-group">
                                    <Row>
                                        <Col sm="6">
                                            <Input placeholder="Fist Name" />
                                        </Col>
                                        <Col sm="6">
                                            <Input placeholder="Last Name" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="6">
                                            <Input placeholder="Email address" />
                                        </Col>
                                        <Col sm="6">
                                            <Input placeholder="Your email again" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="12">
                                            <Input placeholder="Your country of birth" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="12">
                                            <Input placeholder="Marial Status" />
                                        </Col>
                                    </Row>

                                    <Row className="check-container">
                                        <Col sm="12">
                                            <Input type="checkbox" id="form-checkbox"/>
                                            <label for="form-checkbox">Yes, I finished high school OR I have qualifying training.</label>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm="12">
                                            <Button block className="btn-submit">Continue</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default HomeHeader;
