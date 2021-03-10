import React from 'react';
import { Container } from 'react-bootstrap';

import { Title } from './styles';

import Header from '../Header';
import Footer from '../Footer';
import Feed from '../../components/Feed';

export default function Main() {
  const feeds = [
    {
      header: 'Algust',
      title: 'The Trump administration',
      text: 'bla bla bla bla',
    },
    {
      header: 'Jen',
      title: 'Corona virus are getting bigger',
      text: 'bla bla bla bla',
    },
    {
      header: 'Talita',
      title: 'Administrative Obligations',
      text: 'bla bla bla bla',
    },
  ];

  return (
    <>
      <Header />
      <Title> Esta é a página do Main </Title>

      <Container>
        {feeds.map(feed => (
          <Feed
            key={feed.title}
            header={feed.header}
            text={feed.text}
            title={feed.title}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
}
