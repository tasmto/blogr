import React from 'react';
import { Col, Row, Image, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormatDate } from '../../../utilities/FormatNumber';
import { trimString } from '../../../utilities/FormatString';

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
  return (
    <Row className='h-100 row g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative'>
      <Col className='p-4 d-flex flex-column position-static'>
        <Row>
          <Col>
            <Badge bg='light' text='dark'>
              World
            </Badge>
          </Col>
        </Row>
        <h3 className='mb-0'>{trimString(post.title, 35)}</h3>
        <div className='mb-1 text-muted'>{FormatDate(post.approveDate)}</div>
        <p className='card-text mb-auto'>{trimString(post.excerpt, 70)}</p>
        <Link
          to={`/posts/${post._id}`}
          className='stretched-link mt-3 justify-self-end'
        >
          Continue reading
        </Link>
      </Col>
      <Col sm='auto' md={4} className='d-none d-md-block align-self-end h-100'>
        <Image
          src={post.thumbnail}
          className='bd-placeholder-img'
          style={{
            width: '100%',
            height: '100%',

            objectFit: 'cover',
          }}
        />
      </Col>
    </Row>
  );
};

export default SinglePostCard;
