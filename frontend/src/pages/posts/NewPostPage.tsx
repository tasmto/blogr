import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Image,
  Spinner,
} from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { AiOutlineFontSize } from 'react-icons/ai';
import { createPost } from '../../redux/actions/postActions';
import { postTypes } from '../../constants/postTypes';
import { trimString } from '../../utilities/FormatString';

type Props = {};
type postType = {
  name: '';
  title: '';
  subTitle: '';
  icon: any;
  heading: '';
  description: '';
};

function NewPostPage({}: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [typeSelected, setTypeSelected] = useState(postTypes.at(0));
  const handleTypeChange = (postType: any) => setTypeSelected(postType);

  const postCreate = useSelector((state) => state.postCreate);
  const { loading: loadingCreate, post, success } = postCreate;

  // * Post types can be created through Url prams
  // * type='type&create='true'
  useEffect(() => {
    if (!searchParams.get('type')) return;
    const type = postTypes.find(
      (type) => type.name === searchParams.get('type')
    );
    setTypeSelected((current) => type || current);
  }, [searchParams]);

  // * Auto create actions can be created through Url prams
  // * type='type&create='true'
  useEffect(() => {
    if (searchParams.get('create')) dispatch(createPost(typeSelected.name));
  }, [searchParams]);

  // * When a post is created navigate to it
  useEffect(() => {
    if (success) navigate(`/posts/create/${post._id}`);
  }, [success]);

  const handleTypeSubmit = (e) => {
    e.preventDefault();
    // ! Create a post in api with demo data
    // ts-lint ignore
    dispatch(createPost(typeSelected.name));
  };

  if (loadingCreate) return <Spinner animation='border' />;
  return (
    <>
      <Container fluid className='bg-dark background-image background-image-2'>
        <Container fluid='lg' as='section'>
          <Row className='row align-items-center g-3 g-lg-5 py-5 '>
            <Col sm={6} lg={5} xl={4} className='mx-auto mt-0'>
              <h3 className='display-6 text-center fw-bold d-sm-none mb-3 lh-1 text-light'>
                What kind of post are you thinking of making?
              </h3>
              <Form
                className='p-4 h-100 w-100 rounded-3 actions-card--container px-5 py-5 '
                onSubmit={handleTypeSubmit}
              >
                {postTypes.map((type) => (
                  <Form.Group key={type.name} className='form-floating mb-2 '>
                    <Button
                      id={type.name}
                      onClick={() => handleTypeChange(type)}
                      size='lg'
                      variant={
                        typeSelected?.name === type.name
                          ? 'success'
                          : 'outline-secondary'
                      }
                      className='btn-block d-flex align-items-center gap-3 py-2 px-3 lh-sm w-100'
                    >
                      <type.icon style={{ height: '50px', width: '50px' }} />

                      <p className='text-start mb-0 fs-6'>
                        <strong className='d-block'>{type.title}</strong>
                        <small>{type.subTitle}</small>
                      </p>
                    </Button>
                  </Form.Group>
                ))}

                <button
                  className='w-100 btn btn-lg btn-primary mt-4'
                  type='submit'
                >
                  Ready
                </button>
                <hr className='my-3' />
                <small className='text-muted'>
                  Let us know if there is something missing ;)
                </small>
              </Form>
            </Col>
            <Col
              id='templates'
              sm={6}
              lg={7}
              xl={8}
              className=' text-lg-start position-relative mt-0'
              as='article'
            >
              <img
                src={typeSelected.thumbnail}
                className='position-absolute top-50 start-50 h-100 w-100 contain floating-image'
              />
              <div style={{ zIndex: 2 }} className='position-relative'>
                <h1 className='display-4 fw-bold lh-1 text-light'>
                  {typeSelected.heading}
                </h1>
                <p className='col-lg-10 fs-4 text-light'>
                  {trimString(typeSelected.description, 200)}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid='lg'>
        <h1 className='display-4 fw-bold'>Templates go here</h1>
      </Container>
    </>
  );
}

export default NewPostPage;
