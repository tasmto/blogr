import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listPostDetails } from '../../redux/actions/postActions';
import TextPostEditor from '../../features/posts/postUpdate/TextPostEditor';
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

  if (loading || !post || error) return <Spinner animation='border' />;
  return (
    <Container fluid='lg'>
      {post.type === 'text' && <TextPostEditor post={post} />}
    </Container>
  );
}

export default EditPostPage;
