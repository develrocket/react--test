import React, {useState} from "react";
import {
    Col,
    Container,
    Row,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem, Button, Table,
} from "reactstrap";

import IconDocument from '../../assets/img/icons/icon_document_text.svg'


function HomeContent() {
    const [open, setOpen] = useState('1');
    const toggle = (id: any) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    };



    return (
        <>
            <div className="section section-home-content">
                <Container>
                    <Row>
                        <Col sm="12" className="home-content-tip">
                            <img src={IconDocument} />
                            Find the right visa for you!
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                            <Accordion flush open={open} {...{toggle: toggle}}>
                                <AccordionItem>
                                    <AccordionHeader targetId="1">Diversity Visa Cost</AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        <div className="visa-cost-container">
                                            <div className="tip-content">
                                                Mandatory Government Fees for Green Cards

                                                <Button className="btn btn-danger">Apply Now</Button>
                                            </div>

                                            <Table>
                                                <thead>
                                                <tr>
                                                    <th>
                                                        Free Type
                                                    </th>
                                                    <th>
                                                        Cost (to Applicat Living in the U.S.)
                                                    </th>
                                                    <th>
                                                        Cost (to Applicant Living Abroad)
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        Family Sponsorship Form <a>(I-130)</a>
                                                    </td>
                                                    <td>
                                                        $535
                                                    </td>
                                                    <td>
                                                        $535
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Green Card Application Form <a>(I-485)</a>
                                                    </td>
                                                    <td>
                                                        $1140
                                                    </td>
                                                    <td>
                                                        Not required
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Financial Support Form <a>(I-864)</a>
                                                    </td>
                                                    <td>
                                                        $0
                                                    </td>
                                                    <td>
                                                        $120
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Work Permit Application Form <a>(I-765)</a> (optional)
                                                    </td>
                                                    <td>
                                                        $0
                                                    </td>
                                                    <td>
                                                        Not required
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Travel Permit Application Form <a>(I-131)</a> (optional)
                                                    </td>
                                                    <td>
                                                        $0
                                                    </td>
                                                    <td>
                                                        Not required
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a>Biometrics</a> (Fingerprints & Photo)
                                                    </td>
                                                    <td>
                                                        $85
                                                    </td>
                                                    <td>
                                                        $0
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a>State Department Processing</a>
                                                    </td>
                                                    <td>
                                                        Not required
                                                    </td>
                                                    <td>
                                                        $325
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a>USCIS Immigrant Fee</a>
                                                    </td>
                                                    <td>
                                                        Not required
                                                    </td>
                                                    <td>
                                                        $220
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a>Medical Examination</a>
                                                    </td>
                                                    <td>
                                                        *Varies
                                                    </td>
                                                    <td>
                                                        *Varies
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Total</th>
                                                    <th>$1760</th>
                                                    <th>$1200</th>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="d-flex justify-content-end bottom-text">
                                            Fees are subject to change, please use &nbsp; <a>this calculator</a>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="2">Diversity Visa Timeline</AccordionHeader>
                                    <AccordionBody accordionId="2">
                                        <strong>This is the second item&#39;s accordion body.</strong>
                                        You can modify any of this with custom CSS or overriding our default
                                        variables. It&#39;s also worth noting that just about any HTML can
                                        go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="3">Diversity Visa FAQs</AccordionHeader>
                                    <AccordionBody accordionId="3">
                                        <strong>This is the third item&#39;s accordion body.</strong>
                                        You can modify any of this with custom CSS or overriding our default
                                        variables. It&#39;s also worth noting that just about any HTML can
                                        go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </Col>
                    </Row>


                </Container>
            </div>
        </>
    )
}

export default HomeContent;
