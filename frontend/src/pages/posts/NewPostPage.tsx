import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineFontSize } from 'react-icons/ai';

type Props = {};

function NewPostPage({}: Props) {
  const navigate = useNavigate();
  const [typeSelected, setTypeSelected] = useState('');
  const handleTypeChange = (e) => {
    if (e.target.id) setTypeSelected(e.target.id);
  };
  const handleTypeSubmit = (e) => {};
  return (
    <Container fluid className='container bg-light'>
      <Row className='row align-items-center g-lg-5 py-5'>
        <Col sm={6} lg={5} className='mx-auto '>
          <h3 className='display-6 text-center fw-bold d-sm-none mb-3 lh-1'>
            What kind of post are you thinking of making?
          </h3>
          <Form
            className='p-4 h-100 w-100 border rounded-3 bg-light'
            onSubmit={handleTypeSubmit}
          >
            <Form.Group className='form-floating mb-3'>
              <Button
                id='text'
                type='button'
                onClick={handleTypeChange}
                size='lg'
                variant={
                  typeSelected === 'text' ? 'success' : 'success-outline'
                }
                className='btn-block d-flex align-items-center gap-3 py-2 px-3 lh-sm w-100'
              >
                <AiOutlineFontSize style={{ height: '50px', width: '50px' }} />

                <p className='text-start mb-0 fs-6'>
                  <strong className='d-block'>Features</strong>
                </p>
              </Button>
            </Form.Group>

            <button className='w-100 btn btn-lg btn-primary' type='submit'>
              Ready
            </button>
            <hr className='my-4' />
            <small className='text-muted'>
              Let us know if there is something missing ;)
            </small>
          </Form>
        </Col>
        <Col
          id='templates'
          sm={6}
          lg={7}
          className='text-center text-lg-start'
          as='article'
        >
          <h1 className='display-4 fw-bold lh-1'>
            Vertically centered hero sign-up form
          </h1>
          <p className='col-lg-10 fs-4 '>
            Below is an example form built entirely with Bootstrap's form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default NewPostPage;
