import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { SITE_TITLE } from '../../constants/general';
import DeveloperDetailsBlocks from '../developer/DeveloperDetailsBlocks';

const Footer = () => {
  return (
    <footer>
      <Container fluid='lg'>
        <hr />
        <Row className='justify-content-between'>
          <Col xs='auto'>
            <Navbar>
              <Nav>
                <Nav.Link href='#features'>Features</Nav.Link>
                <Nav.Link href='#pricing'>Pricing</Nav.Link>
              </Nav>
            </Navbar>
          </Col>
          <Col xs='auto' className='py-3'>
            <>Copyright © {SITE_TITLE}</>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
