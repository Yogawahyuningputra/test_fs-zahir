import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Brand from '../../assests/images/zahir-international.png'
import { ImLinkedin, ImWhatsapp, ImFacebook2, ImInstagram } from 'react-icons/im'

const Footers = () => {
    return (
        <Container className='footer'>
            <Row >
                <Col md="5">
                    <div>
                        <img src={Brand} alt="icons" width={100} />
                    </div>
                    <div className="my-3 fw-bold color-text">
                        Copyright © 2022 PT Zahir International.
                        All rights reserved.
                    </div>
                    <div>
                        <ImLinkedin style={{ fontSize: "30px" }} className='me-2' />
                        <ImFacebook2 style={{ fontSize: "30px" }} className='mx-2' />
                        <ImInstagram style={{ fontSize: "30px" }} className='mx-2' />
                        <ImWhatsapp style={{ fontSize: "30px" }} className='mx-2' />
                    </div>
                </Col>
                <Col md="2" className='fs-4 fw-bold color-text'>
                    <div className="fs-5">
                        Menu
                    </div>
                    <div className="fs-6 fw-bold mt-4">
                        Berita
                    </div>
                    <div className="fs-6">
                        Blog
                    </div>
                    <div className="fs-6">
                        Zahir Australia
                    </div>
                </Col>
                <Col className='text-color fs-4 fw-bold color-text'>
                    <div className="fs-5">
                        Tentang Kami
                    </div>
                    <div className="fs-6 mt-4">
                        Support Center
                    </div>
                    <div className="fs-6">
                        Karir
                    </div>
                    <div className="fs-6">
                        Tentang Zahir
                    </div>

                </Col>
                <Col md="2" className="fs-4 fw-bold color-text">
                    <div className="fs-5">
                        FAQs
                    </div>
                    <div className="fs-6 mt-4">
                        Tanya Jawab
                    </div>
                    <div className="fs-6">
                        EULA
                    </div>
                    <div className="fs-6">
                        Term of Us
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footers