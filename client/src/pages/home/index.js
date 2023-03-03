import React from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import Hero from '../../assests/images/hero.png'
import Hero1 from '../../assests/images/hero-1.png'
import './home.scss'

const Home = () => {
    return (
        <>
            <Container className='main-app mb-5' >
                <Card className='home my-4 border-0'>
                    <Row className='m-0' >
                        <Col md="8" className='px-4'>
                            <div className='fw-bold fs-1 mt-5 color-text'>
                                Mulai Bisnismu Bersama
                                Zahir Online Sekarang Juga
                            </div>
                            <div className='fw-bold fs-5 my-4 color-text'>
                                Start free trial now, and explore all tools, experience, and service you need to start, run, and grow your business.
                            </div>
                            <div>
                                <Button variant="outline-success" className='button-1 me-5'>Send An Email</Button>
                                <Button variant="success" className='button-1'>Contact With Whatsapp</Button>


                            </div>

                        </Col>
                        <Col md="4" className='p-0'>
                            <img src={Hero} alt="hero" className='hero rounded-1' />
                        </Col>
                    </Row>
                </Card>

                <Card className='home my-2 border-0'>
                    <Row className='m-0' >
                        <Col md="8" className='px-4'>
                            <div className='fw-bold fs-5 mt-5 color-text'>
                                Not sure about the best product to solve your business problems? Don’t worry, we have Zahir Customer Care!
                            </div>
                            <div className='fw-bold fs-5 mt-5 color-text'>
                                <Button className='button'>Contact Customer Care</Button>
                            </div>

                        </Col>
                        <Col md="4" className='p-0'>
                            <img src={Hero1} alt="hero" className='hero rounded-1' />
                        </Col>
                    </Row>
                </Card>

            </Container>
        </>

    )
}

export default Home