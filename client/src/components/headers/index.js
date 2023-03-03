import { Container, Navbar, Button, NavDropdown } from 'react-bootstrap';
import Brand from '../../assests/images/zahir-international.png'
import './headers.scss'
import { Login, Register } from '..';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import { MdLogout } from 'react-icons/md'
function Headers() {
    const navigate = useNavigate()
    const [state, dispatch] = useContext(UserContext)

    const Logout = () => {
        dispatch({
            type: "LOGOUT_SUCCESS"
        })
        alert('Logout Success')
        navigate("/")
    }
    return (

        <Navbar expand="lg" variant="light" bg="white" className="fixed-top shadow">
            <Container>
                <Navbar.Brand href="/" className='col-md-8'>
                    <img src={Brand} alt="icon" />
                </Navbar.Brand>


                {/* <Button className='button text-white fw-bold px-4 mx-2 header-text' >Free Trial</Button> */}

                {state.isLogin === true ? (
                    <Navbar>

                        <NavDropdown title="Menu Produk" id="basic-nav-dropdown" className='header-text'>
                            {state.user.role === "Customer" ? (
                                <>
                                    <NavDropdown.Item>
                                        <span className='mx-2 header-text' onClick={() => navigate('/companies')}>Companies</span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <span className='mx-2 header-text' onClick={() => navigate('/my-companies')}>MyCompanies</span>
                                    </NavDropdown.Item>
                                </>

                            ) : (
                                <NavDropdown.Item >
                                    <span className='mx-2 header-text' onClick={() => navigate('/list-companies')}>List Companies</span>
                                </NavDropdown.Item>
                            )}
                            <NavDropdown.Item >
                                <span className='mx-2 header-text' onClick={() => navigate('/add-companies')}>Add Companies</span>
                            </NavDropdown.Item>

                        </NavDropdown>
                        <MdLogout className='logout ms-5 me-0' title="Logout" onClick={Logout} />
                    </Navbar>




                ) : (
                    <>
                        <Login className='mx-0' />
                        <Register />
                    </>
                )}

            </Container>
        </Navbar>

    );
}

export default Headers;