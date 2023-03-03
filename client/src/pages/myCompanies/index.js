import React from 'react'
import { Container, Card, Row, Col, Stack, Button } from 'react-bootstrap'
import Hero1 from '../../assests/images/hero-1.png'
import { useQuery } from 'react-query'
import { API } from '../../config/api/api'
import moment from 'moment'


const MyCompanies = () => {
    let { data: myCompanies } = useQuery('myCompanies', async () => {
        const response = await API.get("/companyByUser")
        return response.data.data
    })
    console.log(myCompanies)
    return (

        <Container className="main color-text bg-white">
            <Row xs="3" className="d-flex justify-content-center gap-2">
                {myCompanies?.map((data, index) => (

                    <Col key={index}
                        xs="4"
                        className="mt-5 mb-5"
                        style={{ width: "22rem", height: "auto", position: "relative" }}
                    >
                        <Card >
                            <Col className="fw-bold fs-5 mt-4 mx-2 rounded-end" style={{ position: "absolute", width: "auto", height: "35px", }}>
                                {data?.user?.name}
                            </Col>
                            <Card.Img variant="top" src={Hero1} alt="images" className="p-2" />
                            < Card.Body className="py-1 px-2" >
                                Status : {data?.status} | {data?.variants?.name}
                                <Col className="mb-1 mt-0 py-0 fw-bold fs-5">
                                    {data?.name}
                                </Col>
                                <Stack direction="horizontal">
                                    <Col className="fw-bold text-warning text-start fs-6">
                                        <div>
                                            Start date
                                        </div>
                                        <div>
                                            {moment(data?.start_date).format("DD MMMM YYYY")}

                                        </div>
                                    </Col>
                                    <Col className="text-end text-secondary fw-bold">
                                        <div>
                                            Expired Date
                                        </div>
                                        <div>
                                            {moment(data?.expired_date).format("DD MMMM YYYY")}

                                        </div>
                                    </Col>
                                </Stack>
                                <Button className='button w-100'>Subscribe</Button>

                            </Card.Body>

                        </Card>
                    </Col >
                ))}

            </Row >

        </Container >
    )
}

export default MyCompanies