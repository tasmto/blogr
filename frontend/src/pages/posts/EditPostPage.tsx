import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listPostDetails } from '../../redux/actions/postActions';
type Props = {};

function EditPostPage({}: Props) {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // * Reset review on page load and get post details
  useEffect(() => {
    dispatch(listPostDetails(params.postId));
  }, [params.postId]);

  const postDetails = useSelector((state) => state.postDetails);
  const { loading, post, error } = postDetails;
  return <Container fluid='lg'>EditPostPage</Container>;
}

export default EditPostPage;
