import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../style/App.css';
import Header from './template/Header';

const TrendingGifs = lazy(() => import('./TrendingGifs'));
const SearchPage = lazy(() => import('./SearchPage'));
const RandomGif = lazy(() => import('./RandomGif'));

function App() {

  return (
    <div className="App">

      <Router basename='/get-gifs'>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={ TrendingGifs } />
            <Route exact path="/search" component={ SearchPage } />
            <Route exact path="/random" component={ RandomGif } />
          </Switch>
        </Suspense>
      </Router>
    
    </div>
  );
}

export default App;
