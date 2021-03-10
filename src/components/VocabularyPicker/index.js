import React from 'react';
import Header from '../../Pages/Header';
import Footer from '../../Pages/Footer';

import './styles.css';

import Board from './Board';
import Card from './Card';

function index() {
  return (
    <>
      <Header />
      <div className="App">
        <main className="flexbox">
          <Board id="board-1" className="board">
            <Card id="card-1" className="card" draggable="true">
              <p> Card 1 </p>
            </Card>
          </Board>

          <Board id="board-2" className="board">
            <Card id="card-2" className="card" draggable="true">
              <p> Card 2 </p>
            </Card>
          </Board>
          <Board id="board-3" className="board">
            <Card id="card-3" className="card" draggable="true">
              <p> Card 3 </p>
            </Card>
          </Board>
          <Board id="board-4" className="board">
            <Card id="card-4" className="card" draggable="true">
              <p> Card 4 </p>
            </Card>
          </Board>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default index;
