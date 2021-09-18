import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

import { Title, Space } from './styles';

import Header from '../Header';
import Footer from '../Footer';
import Feed from '../../components/Feed';

export default function Main() {
  const feeds = [
    {
      author: 'Algust',
      title: 'The Trump administration',
      text: 'bla bla bla bla',
    },
    {
      author: 'Jen',
      title: 'Corona virus are getting bigger',
      text: 'bla bla bla bla',
    },
    {
      author: 'Talita',
      title: 'Administrative Obligations',
      text: 'bla bla bla bla',
    },
  ];

  return (
    <>
      <Header />

      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Button variant="primary">New Post</Button>
          </Col>
        </Row>

      </Container>

      <Container>
        {feeds.map(feed => (
          <Feed
            key={feed.title}
            author={feed.author}
            text={feed.text}
            title={feed.title}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
}
