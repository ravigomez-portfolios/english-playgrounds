import React from 'react';

import { Footer } from './styles';

function index() {
  return (
    <Footer>
      CopyRight(c) English Playgrounds :) - {new Date().getFullYear()}
    </Footer>
  );
}

export default index;
