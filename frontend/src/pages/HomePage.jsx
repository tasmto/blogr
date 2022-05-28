import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Pagination, Row, Spinner } from 'react-bootstrap';
import HomePageHero from '../features/heros/HomePageHero';
import DeveloperDetailsBlocks from '../features/developer/DeveloperDetailsBlocks';
import SinglePostCard from '../features/posts/postItems/SinglePostCard';
import { listProducts } from '../redux/actions/postActions';

const HomePage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const searchTerm = params.keyword;
  const pageNumber = params.pageNumber || 1;

  const postList = useSelector((state) => state.postList);
  const { loading, error, posts, page, pages } = postList;

  useEffect(() => {
    if (posts.length < 1) dispatch(listProducts(searchTerm, pageNumber));
  }, [dispatch, searchTerm, pageNumber]);

  return (
    <>
      <Row className='p-4 p-md-5 mb-4 text-white rounded bg-dark' as='section'>
        <Col sm={10} md={8}>
          <h1 className='display-4 fst-italic'>
            Title of a longer featured blog post
          </h1>
          <p className='lead my-3'>
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </p>
          <p className='lead mb-0'>
            <a href='#' className='text-white fw-bold'>
              Continue reading...
            </a>
          </p>
        </Col>
      </Row>

      <Row className='mb-2 g-3'>
        {!loading &&
          posts.map((post) => (
            <Col md={6} key={post._id}>
              <SinglePostCard post={post} />
            </Col>
          ))}
      </Row>
      <DeveloperDetailsBlocks />
    </>
  );
};

export default HomePage;
