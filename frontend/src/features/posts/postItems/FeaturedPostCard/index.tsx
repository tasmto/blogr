import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Col, Row, Spinner, Image, Badge, Button } from 'react-bootstrap';
import { trimString } from '../../../../utilities/FormatString';
import './style.scss';
import SideScrollableCategoryBadges from '../../SideScrollableCategoryBadges';

type Props = {
  post: {
    _id: '';
    user: '';
    title: '';
    thumbnail: '';
    excerpt: '';
    categories: [''];
    sections: [{}];
    comments: [];
    numComments: Number;
    votes: [];
    numVotes: Number;
    averageRating: Number;
    isPublished: true;
    isSubmitted: true;
    submittedAt: '';
    approver: '';
    approveDate: '';
    isApproved: true;
    createdAt: '';
    updatedAt: '';
  };
  loading: Boolean;
};

const FeaturedPostCard = ({ post, loading }: Props) => {
  return loading ? (
    <Image
      fluid
      className=' cover featured-post-card--loader cover h-100 w-100'
      src='https://i.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.webp'
    />
  ) : !post ? null : (
    <Card
      bg='dark'
      as='section'
      className='rounded-3 h-100 hero-featured-blog border-0'
      style={{
        backgroundImage: `url(${post.thumbnail})`,
      }}
    >
      <Card.Header className='bg-transparent font'>
        <SideScrollableCategoryBadges categories={post.categories} />
      </Card.Header>
      <Link to={`posts/post._id`}>
        <Card.Body
          as='article'
          className='p-4 p-md-5 m-0 text-white rounded-3
           h-100 absolute '
        >
          <Card.Title className='display-4 fst-italic '>
            {trimString(post.title, 35)}
          </Card.Title>
          <Card.Text className='lead my-3' as='p'>
            {trimString(post.excerpt, 140)}
          </Card.Text>

          <Button variant='primary' role='link'>
            View Post
          </Button>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default FeaturedPostCard;
