import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
  FormControl,
  Spinner,
  Container,
} from 'react-bootstrap';
import Rating from '../../features/posts/Rating';
import axios from 'axios';
import LoginToDemoAccountsButtons from '../../features/instantAccounts/LoginToDemoAccountsButtons';
import { useDispatch, useSelector } from 'react-redux';
import {
  listPostDetails,
  createPostReview,
} from '../../redux/actions/postActions';
import { POST_CREATE_REVIEW_RESET } from '../../redux/constants/postConstants';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { FormatDate, FormatCurrency } from '../../utilities/FormatNumber';
import SideScrollableCategoryBadges from '../../features/posts/SideScrollableCategoryBadges';

const SinglePostPage = () => {
  const [qty, setQty] = useState(1);

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postReview, setPostReview] = useState({
    rating: 5,
    comment: '',
  });

  const postDetails = useSelector((state) => state.postDetails);
  const { loading, post, error } = postDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postReviewCreate = useSelector((state) => state.postReviewCreate);
  const { success: successCreateReview, error: errorCreateReview } =
    postReviewCreate;

  // * Reset review on page load and get post details
  useEffect(() => {
    dispatch(listPostDetails(params.postId));
    dispatch({ type: POST_CREATE_REVIEW_RESET });
  }, [params.postId, successCreateReview]);

  const onMutateWriteReviewForm = (e) => {
    setPostReview((currentData) => {
      return { ...currentData, [e.target.id]: e.target.value };
    });
  };
  const submitReviewHandler = (e) => {
    e.preventDefault();
    dispatch({ type: POST_CREATE_REVIEW_RESET });
    dispatch(createPostReview(params.postId, postReview));
  };
  if (!post || loading || error) return <Spinner animation='border' />;
  else
    return (
      <Container>
        <div
          className='p-4 p-md-5 mb-4 text-white rounded bg-dark background-image'
          style={{ backgroundImage: `url(${post.thumbnail})` }}
        >
          <div className='col-md-6 px-0'>
            <h1 className='display-4 fst-italic text-light'>{post.title}</h1>
            <p className='lead my-3 text-light'>{post.excerpt}</p>
          </div>
        </div>
        {post?.categories?.length < 1 && (
          <SideScrollableCategoryBadges categories={post.categories} />
        )}
        <Row className='g-3'>
          {post?.sections &&
            post?.sections.map((section) => {
              if (section.template === 'rtc')
                return (
                  <Container as='section' fluid>
                    {parse(section.content)}
                  </Container>
                );
            })}
        </Row>
      </Container>
    );
};

export default SinglePostPage;
