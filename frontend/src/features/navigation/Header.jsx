import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Offcanvas,
  FormControl,
  Form,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { logout } from '../../redux/actions/userActions';

import { SITE_TITLE } from '../../constants/general';

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header>
      <Navbar fixed='top' expand='md' className='mb-3'>
        <Container>{SITE_TITLE}</Container>
      </Navbar>
    </header>
  );
};

export default Header;
