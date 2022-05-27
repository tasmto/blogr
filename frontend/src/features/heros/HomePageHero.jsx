import React, { useEffect } from 'react';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Col,
  Row,
  Carousel,
  Card,
  Image,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePageHero = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return <Card className='p-5 mb-5 bg-dark rounded-3 '>Hero</Card>;
};

export default HomePageHero;
