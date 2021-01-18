import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

import Header from '../../Header';
import Footer from '../../Footer';
import Modal from '../../../components/WordDefinitionModal';
import useModal from '../../../components/useModal';

import { Title } from './styles';

const Index = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Header />
      <Title>Vocabulary Center</Title>
      <div className="container">
        <Form inline className="center">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <div className="d-flex justify-content-around">
          <div>New </div>
          <div>To Lern </div>
          <div>Learned </div>
        </div>

        <div className="d-flex justify-content-around">
          <Button onClick={toggle} variant="btn btn-primary">
            Start Training
          </Button>
          <Button onClick={toggle} variant="btn btn-primary">
            Start Trainings
          </Button>
          <Button onClick={toggle} variant="btn btn-primary">
            Start Training
          </Button>
        </div>

        <div className="d-flex">
          <div className="d-flex col-4 align-content-start flex-wrap  ">
            <Button className="btn btn-primary">Word 1</Button>
            <Button className="btn btn-primary">Word 2</Button>
            <Button className="btn btn-primary">Word 3</Button>
            <Button className="btn btn-primary">Word 3</Button>
            <Button className="btn btn-primary">Word 3</Button>
            <Button className="btn btn-primary">Word 3</Button>
            <Button className="btn btn-primary">Word 3</Button>
            <Button className="btn btn-primary">Word 3</Button>
            <Button className="btn btn-primary">Word 3</Button>
            <Button className="btn btn-primary">Word 3</Button>
          </div>
          <div className="d-flex col-4 align-content-start flex-wrap">
            <Button className="btn btn-primary">Word 3</Button>
            <Button className="btn btn-primary">Word 3</Button>
            <Button className="btn btn-primary">Word 3</Button>
            <Button className="btn btn-primary">Word 3</Button>
            <Button className="btn btn-primary">Word 3</Button>
            <Button className="btn btn-primary">Word 3</Button>
            <Button className="btn btn-primary">Word 3</Button>
          </div>
          <div className="d-flex col-4 align-content-start flex-wrap ">
            <Button className="btn btn-primary ">Word 3</Button>
            <Button className="btn btn-primary">Word 3</Button>
            <Button className="btn btn-primary ">Word 3</Button>
            <Button className="btn btn-primary">Word 3</Button>
          </div>
        </div>
      </div>

      <Modal isShowing={isShowing} hide={toggle} />

      <Footer />
    </>
  );
};

export default Index;
