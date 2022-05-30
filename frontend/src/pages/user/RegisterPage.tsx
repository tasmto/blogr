import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Container,
  Form,
  Row,
  Col,
  ButtonGroup,
} from 'react-bootstrap';
import LoginToDemoAccountsButtons from '../../features/instantAccounts/LoginToDemoAccountsButtons';

const RegisterPage = () => {
  const [validated, setValidated] = useState(false);

  const handleRegisterUser = (event) => {
    console.log(1222);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container
      fluid
      className='px-3 py-5 rounded-3 shadow background-image background-image-2'
    >
      <Container fluid='sm' style={{ maxWidth: '720px' }}>
        <Card className='shadow-lg actions-card--container'>
          <Card.Body as={Row} className='g-5 px-5 py-4 justify-content-stretch'>
            <Col md={6}>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleRegisterUser}
                as={Row}
                className='g-3 align-items-stretch justify-content-stretch'
              >
                <h2 className='fs-3 fw-bold mb-1'>Sign up below:</h2>
                <Row as='fieldset' className='gy-3 gx-2 px-0 me-0  mt-0 w-100'>
                  <Col sm={6} className='ps-0'>
                    <Form.Group
                      className='form-floating px-0'
                      controlId='firstName'
                    >
                      <Form.Control
                        required
                        type='text'
                        className='form-control rounded-4'
                        placeholder='Handsome'
                      />
                      <Form.Label>Name?</Form.Label>
                      <Form.Text muted>First name.</Form.Text>
                      <Form.Control.Feedback type='invalid'>
                        Your must provide a first name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col sm={6} className='pe-0'>
                    <Form.Group
                      className='form-floating px-0'
                      controlId='lastName'
                    >
                      <Form.Control
                        required
                        type='text'
                        placeholder='Heavenly'
                        className='form-control rounded-4'
                      />
                      <Form.Label>Surname?</Form.Label>
                      <Form.Text muted>Last name.</Form.Text>
                      <Form.Control.Feedback type='invalid'>
                        Your must provide a last name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className='form-floating px-0' controlId='email'>
                  <Form.Control
                    required
                    type='email'
                    className='form-control rounded-4'
                    placeholder='handsome@example.com'
                  />
                  <Form.Label>Email address</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating px-0' controlId='password'>
                  <Form.Control
                    required
                    type='password'
                    className='form-control rounded-4'
                    placeholder='Strong and powerfull'
                  />
                  <Form.Label>Password</Form.Label>
                  <Form.Text muted>
                    Minimum of 20 characters, containing letters and numbers
                    only.
                  </Form.Text>
                  <Form.Control.Feedback type='invalid'>
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant='primary'
                  size='lg'
                  className='w-100 mt-4'
                  type='submit'
                >
                  Sign up
                </Button>
                <Row className='mt-2'>
                  <Col>
                    <small className='text-muted'>
                      By clicking Sign up, you agree to the terms of use.
                    </small>
                  </Col>
                  <Col sm='auto'>
                    <Link className='fs-6' to='/user/login'>
                      Login
                    </Link>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col md={6}>
              <Container fluid className='px-0'>
                <h2 className='fs-3 fw-bold mb-4'>Or demo account</h2>

                <LoginToDemoAccountsButtons />
                <hr />
                <small className='text-muted'>
                  *Recommended{' '}
                  <strong>Please dont start seeding inappropriate data.</strong>
                </small>
              </Container>
            </Col>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default RegisterPage;
