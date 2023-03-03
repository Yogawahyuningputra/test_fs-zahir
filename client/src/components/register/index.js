import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { API } from '../../config/api/api';

const Register = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleOnChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value,
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
            const body = JSON.stringify(register)
            const response = await API.post('/register', body, config)
            if (response.data.code === 200) {
                setShow(false)
                alert("register success")
            }
        } catch (error) {
            alert('Register Failed')
            console.log(error)
        }
    }

    return (
        <>
            <Button className='button text-white fw-bold px-4 header-text' onClick={handleShow} >Register</Button>

            <Modal size="sm" show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="title-login">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => handleOnSubmit(e)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                autoFocus
                                onChange={handleOnChange}
                                name="name"
                                value={register.name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                onChange={handleOnChange}
                                name="email"
                                value={register.email}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={handleOnChange}
                                name="password"
                                value={register.password}

                            />
                        </Form.Group>
                        <Button type="submit" variant="danger" className="w-100">
                            Register
                        </Button>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Register