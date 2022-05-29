import React from 'react';
import { Col, Row, Image, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FormatDate } from '../../../../utilities/FormatNumber';
import { trimString } from '../../../../utilities/FormatString';
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
};

const SinglePostCard = ({ post }: Props) => {
  const navigate = useNavigate();
  return (
    <Row
      className='h-100 row g-0 border rounded overflow-hidden flex-md-row shadow-sm position-relative'
      as='article'
    >
      <Col className='p-4 d-flex flex-column position-static' md={8}>
        <SideScrollableCategoryBadges categories={post.categories} />
        <div onClick={() => navigate(`/posts/${post._id}`)}>
          <h3 className='mb-0 mt-1 text-decoration-none'>
            {trimString(post.title, 23)}
          </h3>
          <div className='mb-1 text-muted text-decoration-none'>
            {FormatDate(post.approveDate)}
          </div>
          <p className='card-text mb-auto text-decoration-none'>
            {trimString(post.excerpt, 70)}
          </p>
        </div>

        <Link to={`/posts/${post._id}`} className=' mt-3 justify-self-end'>
          Continue reading
        </Link>
      </Col>
      <Col sm='auto' md={4} className='d-none d-md-block align-self-end h-100'>
        <Link to={`/posts/${post._id}`}>
          <Image
            src={post.thumbnail}
            role='presentation'
            className='bd-placeholder-img h-100 w-100 cover'
          />
        </Link>
      </Col>
    </Row>
  );
};

export default SinglePostCard;
