import React from "react";

import Logo from '../../assets/img/now-logo.svg';
import {
    Col,
    Container,
    Row
} from "reactstrap";

function HomeFooter() {
    return (
        <>
            <div className="section section-home-footer">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className="menu-container">
                                <img src={Logo}/>
                                <div className="menus">
                                    <ul>
                                        <li>
                                            <a>Terms of Service</a>
                                        </li>
                                        <li>
                                            <a>Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a>Legal Disclaimer</a>
                                        </li>
                                        <li>
                                            <a>Refund Policy</a>
                                        </li>
                                        <li>
                                            <a>Terms of Use</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12}>
                            <p className="footer-desc">
                                Disclaimer: GovAssist is not affiliated with any United States government agency or department. Costs for consulting services do NOT include any government application, medical examination, filing, or biometric fees. This website does not provide legal advice and we are not a law firm. None of our customer service representatives are lawyers and they also do not provide legal advice. We are a private, internet-based travel and immigration consultancy provider dedicated to helping individuals travel to the United States. You may apply by yourself directly at travel.state.gov or at uscis.gov. GovAssist is affiliated with the UT law firm GovAssist Legal which provides legal services on immigration matters. Only licensed immigration professionals can provide advice, explanation, opinion, or recommendation about possible legal rights, remedies, defenses, options, selection of forms or strategies.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default HomeFooter;
