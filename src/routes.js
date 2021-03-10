import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Main from './Pages/Main';
import VocabularyCenter from './Pages/Main/VocabularyCenter';
import VocabularyPicker from './components/VocabularyPicker';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Main" exact component={Main} />
        <Route path="/VocabulayPicker" exact component={VocabularyPicker} />
        <Route path="/VocabularyCenter" exact component={VocabularyCenter} />
      </Switch>
    </BrowserRouter>
  );
}
