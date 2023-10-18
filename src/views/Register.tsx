import React from "react";
import {Button, Col, Row} from "reactstrap";
import CommonNavbar from "../components/Navbars/CommonNavbar";
import IconForward from '../assets/img/icons/icon_forward_10.svg';

function Register() {
    return (
        <>
            <CommonNavbar />

            <div className="wrapper">
                <div className="section section-land">
                    <Row>
                        <Col sm={5}>
                            <div className="left-container">
                                <div className="title-container">
                                    <p>Eletronic</p>
                                    <p style={{color: '#4AC97D'}}>diversity visa</p>
                                    <p>entry form</p>
                                </div>

                                <p className="middle-text">
                                    Here you will fill all your information to reach your dream.
                                </p>

                                <div className="d-flex align-items-center" style={{fontSize: '16px', color: '#fff', marginBottom: '80px'}}>
                                    <img src={IconForward} style={{width: '28px', marginRight: '16px'}}/>
                                    10 minutes to finish
                                </div>

                                <div style={{borderLeft: '6px solid #F7F8F9', paddingLeft: '30px', fontSize: '16px', color: '#fff'}}>
                                    This is a full copy of the official DV Lottery application form. Use it for training only. You will need to apply on the official website www.dvlottery.state.gov when it opens to take part in the lottery.
                                </div>
                            </div>
                        </Col>
                        <Col sm={7}>
                            <div className="right-container d-flex align-items-center justify-content-center" style={{height: '100%', paddingBottom: '126px', position: 'relative'}}>
                                <div>
                                    <p style={{color: '#01264A', fontWeight: 300, fontSize: '54px', marginBottom: '116px'}}>Are you ready to begin?</p>

                                    <div style={{padding: '0 15px'}}>
                                        <Button className="btn btn-success btn-block" block style={{borderRadius: '14px', background: '#4AC97D', fontSize: '24px', height: '58px'}}>Start!</Button>
                                    </div>
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

export default Register;
