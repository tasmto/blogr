import React from 'react';
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap';
import { FiTwitter, FiFacebook, FiGithub } from 'react-icons/fi';

const RegisterPage = () => {
  const handleRegisterUser = (e) => {
    e.preventDefault();
  };
  return (
    <Container fluid>
      <Container fluid='sm' style={{ maxWidth: '720px' }}>
        <Card style={{ borderRadius: '1.25rem' }}>
          <Card.Body as={Row} className='g-5 p-5 justify-content-stretch'>
            <Col md={6}>
              <Form
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
                        type='text'
                        className='form-control rounded-4'
                        placeholder='Handsome'
                      />
                      <Form.Label>Name?</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm={6} className='pe-0'>
                    <Form.Group
                      className='form-floating px-0'
                      controlId='lastName'
                    >
                      <Form.Control
                        type='text'
                        placeholder='Heavenly'
                        className='form-control rounded-4'
                      />
                      <Form.Label>Surname?</Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className='form-floating px-0' controlId='email'>
                  <Form.Control
                    type='email'
                    className='form-control rounded-4'
                    placeholder='handsome@example.com'
                  />
                  <Form.Label>Email address</Form.Label>
                </Form.Group>
                <Form.Group className='form-floating px-0' controlId='password'>
                  <Form.Control
                    type='password'
                    className='form-control rounded-4'
                    placeholder='Strong and powerfull'
                  />
                  <Form.Label>Password</Form.Label>
                </Form.Group>
                <Button
                  variant='primary'
                  size='lg'
                  className='w-100  rounded-4 '
                  type='submit'
                >
                  Sign up
                </Button>
                <small className='text-muted'>
                  By clicking Sign up, you agree to the terms of use.
                </small>
              </Form>
            </Col>
            <Col md={6}>
              <Container fluid className='px-0'>
                <h2 className='fs-3 fw-bold mb-4'>Or use a third-party</h2>

                <Button
                  variant='outline-dark'
                  className='w-100 py-3 mb-2 rounded-4 '
                  type='button'
                >
                  <FiTwitter
                    style={{ width: '20px', height: '20px' }}
                    className='me-2'
                  />
                  <span>Sign up with Twitter</span>
                </Button>
                <Button
                  variant='outline-dark'
                  className='w-100 py-3 mb-2 rounded-4 '
                  type='button'
                >
                  <FiFacebook
                    style={{ width: '20px', height: '20px' }}
                    className='me-2'
                  />
                  <span>Sign up with Facebook</span>
                </Button>
                <Button
                  variant='outline-dark'
                  className='w-100 py-3 mb-2 rounded-4 '
                  type='button'
                >
                  <FiGithub
                    style={{ width: '20px', height: '20px' }}
                    className='me-2'
                  />
                  <span>Sign up with GitHub</span>
                </Button>
                <hr />
                <small className='text-muted'>
                  *Recommended{' '}
                  <strong>
                    This way you don't need to remember a password ;)
                  </strong>
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
