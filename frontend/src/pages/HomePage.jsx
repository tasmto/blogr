import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  Container,
  Col,
  Pagination,
  Row,
  Spinner,
  Image,
  Badge,
} from 'react-bootstrap';
import HomePageHero from '../features/heros/HomePageHero';
import DeveloperDetailsBlocks from '../features/developer/DeveloperDetailsBlocks';
import SinglePostCard from '../features/posts/postItems/SinglePostCardPrimary';
import FeaturedPostCard from '../features/posts/postItems/FeaturedPostCard';
import { listPosts } from '../redux/actions/postActions';

const HomePage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const searchTerm = params.keyword;
  const pageNumber = params.pageNumber || 1;

  const postList = useSelector((state) => state.postList);
  const { loading, error, posts, page, pages } = postList;

  useEffect(() => {
    if (posts.length < 1) dispatch(listPosts(searchTerm, pageNumber));
  }, [dispatch, searchTerm, pageNumber]);

  return (
    <>
      <Container fluid className='bg-light py-3 py-lg-5'>
        <Container fluid='lg'>
          <Row className=' gx-2 gy-3 align-items-center justify-content-stretch'>
            <Col lg={6} className='h-100 shadow-lg'>
              <FeaturedPostCard post={posts.at(0)} loading={loading} />
            </Col>
            <Row className='col-12 col-lg-6 mt-lg-0 gy-2' as='aside'>
              {!loading &&
                posts.length > 0 &&
                [posts[1], posts[2]].map((post) => (
                  <Col sm={6} md={12} key={post._id} className=''>
                    <SinglePostCard post={post} />
                  </Col>
                ))}
            </Row>
          </Row>
        </Container>
      </Container>
      <Container>
        <DeveloperDetailsBlocks />
      </Container>
    </>
  );
};

export default HomePage;
