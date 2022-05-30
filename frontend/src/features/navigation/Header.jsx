import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Offcanvas,
  FormControl,
  OverlayTrigger,
  Tooltip,
  Form,
  Button,
  Image,
  ButtonGroup,
  Row,
  Col,
} from 'react-bootstrap';
import { FiSearch, FiGrid, FiPlus } from 'react-icons/fi';
import { useNavigate, Route, Routes, Link } from 'react-router-dom';
import { logout } from '../../redux/actions/userActions';

import { SITE_TITLE } from '../../constants/general';

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleSearchSubmit = () => {};

  return (
    <header>
      <Navbar
        fixed='top'
        variant='dark'
        bg='dark'
        expand='md'
        className='mb-3 shadow'
      >
        <Container fluid='lg'>
          <Row className='w-100  align-items-center '>
            <Col xs='auto' className='align-items-center d-flex '>
              <Navbar.Brand>
                <Link to='/' className='text-decoration-none'>
                  <h2 className='text-light '>{SITE_TITLE}</h2>
                </Link>
              </Navbar.Brand>
            </Col>
            <Col className='d-flex justify-content-end align-items-center pe-0'>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-md`}
                className='py-0'
                children={
                  <p className='text-muted nav-link m-0'>
                    <FiGrid className='me-2 fs-5 text-light' />
                    <span>Menu</span>
                  </p>
                }
              />
              <Navbar.Offcanvas>
                <Offcanvas.Header closeButton className='bg-dark text-muted'>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                    {SITE_TITLE}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='bg-dark d-md-flex  align-items-center justify-content-center justify-content-md-between '>
                  <Nav className='col-md-auto me-md-3 mb-2 justify-content-center mb-md-0'>
                    <Nav.Item>
                      <Nav.Link href='#' className='nav-link px-2 '>
                        Featured
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='#' className='nav-link px-2 '>
                        drop
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='#' className='nav-link px-2 '>
                        FAQs
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='#' className='nav-link px-2 '>
                        About
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Form className='col-md-auto' onSubmit={handleSearchSubmit}>
                    <Row>
                      <Col xs={9} className='pe-0'>
                        <Form.Control
                          type='search'
                          className='form-control form-control-dark'
                          placeholder='Search...'
                          aria-label='Search'
                        />
                      </Col>
                      <Col xs={3} className='ps-1'>
                        <Button type='submit' variant='outline-success'>
                          <FiSearch className='w-100 h-100' />
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Col>
            <Col xs='auto' className='px-0'>
              {!userInfo ? (
                <ButtonGroup
                  aria-label='Account login actions'
                  className='ms-3'
                >
                  <Button
                    onClick={() => navigate('/user/login')}
                    variant='outline-light'
                    className='me-2'
                    role='link'
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => navigate('/user/register')}
                    variant='warning'
                    role='link'
                  >
                    Sign-up
                  </Button>
                </ButtonGroup>
              ) : (
                <Row className='justify-content-center align-items-center'>
                  <Col sx='auto' className='p-0'>
                    <NavDropdown
                      title={
                        <Image
                          src={userInfo.avatar}
                          fluid
                          roundedCircle
                          style={{ maxWidth: '35px' }}
                        />
                      }
                      id='navbarScrollingDropdown'
                    >
                      <NavDropdown.Item href='#action3'>
                        New Post
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#action4'>
                        My Posts
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#action4'>
                        Settings
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={logoutHandler}>
                        Sign out
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Col>
                  <Col sx='auto' className='p-0'>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={<Tooltip>Create a new post</Tooltip>}
                    >
                      <Link
                        to='/posts/create?type=blank'
                        className='rounded-pill btn btn-warning p-1 '
                        style={{ height: '35px', width: '35px' }}
                      >
                        <FiPlus style={{ height: '20px', width: '20px' }} />
                      </Link>
                    </OverlayTrigger>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
