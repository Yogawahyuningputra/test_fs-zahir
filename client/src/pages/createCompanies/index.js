import React, { useState } from 'react'
import { Container, Form, Stack, Button, Row, Col } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { API } from '../../config/api/api'
import './createCompanies.scss'
const CreateCompanies = () => {
    const [form, setForm] = useState({
        name: '',
        start_date: '',
        expired_date: '',
        status: '',
        variant_id: '',
        user_id: ''

    })

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value,
        })
    }
    const handleOnSubmit = async (e) => {
        try {
            e.preventDefault()
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(form)

            const response = await API.post('/company', body, config)
            alert('create company success')
        } catch (error) {
            console.log('error')
            alert('create company failed')
        }
    }
    let { data: Variants } = useQuery('variantsCache', async () => {
        const response = await API.get('/variants')
        return response.data.data
    })
    return (
        <Container className="w-50 fw-bold bg-light rounded-2 color-text create">

            <Form className="mx-5 text-start" onSubmit={(e) => handleOnSubmit(e)}>
                <div className="d-flex justify-content-between">
                    <div>
                        <Form.Label className="fs-4 text-center mb-4 mt-2"> Add Companies</Form.Label>
                    </div>
                </div>


                <Form.Group className="mb-3" controlId="formGridName" >
                    <Form.Label >Name Companies</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Name" style={{ backgroundColor: "#E5E5E5" }} onChange={handleChange} value={form.name} />
                </Form.Group>
                <Stack direction="vertical" className="mb-3">
                    <Form.Label className="">Variants</Form.Label>
                    <Form.Select size="md" type="number" name='variant_id' style={{ backgroundColor: "#E5E5E5" }} onChange={handleChange} >
                        {Variants?.map((data) => (

                            <option value={data?.id}>{data.name}</option>

                        ))}

                    </Form.Select>
                </Stack>

                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="formGridCity" >
                        <Form.Label>Durations</Form.Label>
                        <Stack direction="horizontal">
                            <Form.Control name="start_date" type="date" placeholder="" style={{ backgroundColor: "#E5E5E5" }} onChange={handleChange} value={form.start_date} />
                            <Form.Label className="mx-2">Start date</Form.Label>
                            <Form.Control name="expired_date" type="date" placeholder="" style={{ backgroundColor: "#E5E5E5" }} onChange={handleChange} value={form.expired_date} />
                            <Form.Label className="mx-2">Expired Date</Form.Label>
                        </Stack>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1" >
                    <Form.Label>Status</Form.Label>
                    <Form.Control name="status" type='text' placeholder="Status" style={{ backgroundColor: "#E5E5E5" }} onChange={handleChange} value={form.status} />
                </Form.Group>


                <div className='d-flex justify-content-center mt-5 mb-5'>
                    <Button
                        // variant="warning"
                        className="w-100 mb-5 text-white fw-bold button"
                        size="md"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </Form>
        </Container >
    )
}

export default CreateCompanies