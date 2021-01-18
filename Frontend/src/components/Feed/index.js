import React from 'react';
import { Card, Button } from 'react-bootstrap';

import { Space } from './styles';

export default function Feed(props) {
  const { header, title, text } = props;

  return (
    <Card>
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Vocabuary (3)</Button>
        <Space />
        <Button variant="primary">Phrasal Verbs (2)</Button>
        <Space />
        <Button variant="primary">Idiom Expressions (1)</Button>
      </Card.Body>
    </Card>
  );
}
