import React, { useContext, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { API } from '../../config/api/api';
import { UserContext } from '../../context/userContext';

const Login = () => {
    const [state, dispatch] = useContext(UserContext)

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const handleOnChange = (e) => {
        setLogin({
            ...login,
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
            const body = JSON.stringify(login)
            const response = await API.post('/login', body, config)
            if (response.data.code === 200) {
                alert('login success')
                setShow(false)
            }
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.data.data
            })

        } catch (error) {
            alert('login failed')
            console.log(error)
        }
    }
    return (
        <>
            <Button className='button text-white fw-bold px-4 header-text' onClick={handleShow} >Login</Button>

            <Modal size="sm" show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="title-login">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => handleOnSubmit(e)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="email"
                                autoFocus
                                onChange={handleOnChange}
                                name="email"
                                value={login.email}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="password"
                                onChange={handleOnChange}
                                name="password"
                                value={login.password}

                            />
                        </Form.Group>
                        <Button type="submit" variant="danger" className='w-100' >
                            Login
                        </Button>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Login