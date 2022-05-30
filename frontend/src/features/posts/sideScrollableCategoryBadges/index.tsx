import React from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import blogCategories from '../../../constants/categories';
import './style.scss';

type Props = {
  categories: [''];
};

const SideScrollableCategoryBadges = ({ categories }: Props) => {
  const navigate = useNavigate();
  if (!categories || categories.length < 1) return null;
  return (
    <Row className='gx-2 side-scrollable-category-badges--container pb-2'>
      {categories.map((cat, i) => {
        const _ = blogCategories.find((category) => category.name === cat);
        const title = _ ? _.title : cat;
        const background = _ ? _.background : '#f8f5f0 ';
        const color = _ ? _.color : '#212529';

        return (
          <Col key={cat + i} xs='auto'>
            <Badge
              role='link'
              bg='none'
              as='button'
              onClick={() => navigate(`/categories/${cat}`)}
              className='category-badge border-0 bg-muted'
              style={{
                backgroundColor: `${background}`,
                color: `${color} `,
              }}
            >
              <span className='text'>{title}</span>
            </Badge>
          </Col>
        );
      })}
    </Row>
  );
};

export default SideScrollableCategoryBadges;
