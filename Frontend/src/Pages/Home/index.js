import React from 'react';
import { Jumbotron } from 'react-bootstrap';

// import { Container } from './styles';

import Header from '../Header';
import Footer from '../Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Jumbotron>
        <h1>Welcome to English Playgrouds!!! </h1>
      </Jumbotron>
      <Footer />
    </>
  );
}
