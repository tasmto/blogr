import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Form, Button, Row, Col, Placeholder, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { getUserDetails, updateUserProfile } from '../../actions/userActions';
import { USER_UPDATE_RESET } from '../../constants/userConstants';
import { listMyOrders } from '../../actions/orderActions';
import OrdersTable from '../../features/orders/OrdersTable';
const ProfilePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  // * @todo: make this an object to have more validation or use react bootstrap
  const [message, setMessage] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const updateLoading = userLogin.loading;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const myOrders = useSelector((state) => state.orderMyList);
  const { orders, loading: loadingOrders, error: errorOrders } = myOrders;

  // Clear all errors and user on Navigate in and out
  useEffect(() => {
    setMessage(null);
    dispatch({ type: USER_UPDATE_RESET });
  }, []);

  useEffect(() => {
    //  Redirect if user isnt logged In
    if (!userInfo) return navigate('/login');

    // Get actual logged in user details
    if (!user.name) dispatch(getUserDetails('profile'));
    else {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [dispatch, userInfo, user]);

  useEffect(() => {
    dispatch(listMyOrders());
  }, [dispatch, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword)
      return setMessage('Your passwords dont match');
    else if (password.length < 6)
      return setMessage('Your password is too short');

    // DISPATCH UPDATE PROFILE
    dispatch(updateUserProfile({ id: user._id, name, email, password }));
  };

  return (
    <Row>
      <Col md={4}>
        <h2>User Profile</h2>
        {error ? (
          <Message variant='danger'>{error}</Message>
        ) : loading || updateLoading ? (
          <p>Loading</p>
        ) : (
          <Form onSubmit={submitHandler} className='gy-3'>
            {/* ! message doesn't clear */}
            {success && <Message variant='success'>Update successful</Message>}
            <Form.Group controlId='name' className='mb-4'>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter your full name...'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='email' className='mb-4'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter your email...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='password' className='mb-4'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter your password...'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='confirmPassword' className='mb-4'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm your password...'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {message && !error && (
              <Message variant='danger' className='mb-4'>
                {message}
              </Message>
            )}
            <Button
              type='submit'
              variant='primary'
              disabled={
                email === user.email && name === user.name && password === ''
              }
            >
              Update Details
            </Button>
          </Form>
        )}
      </Col>
      {/* Orders */}
      <Col md={8}>
        <h2>My Orders:</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : (
          <OrdersTable orders={orders} />
        )}
      </Col>
    </Row>
  );
};

export default ProfilePage;
