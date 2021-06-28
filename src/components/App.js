import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../style/App.css';
import Header from './template/Header';

const TrendingGifs = lazy(() => import('./TrendingGifs'));
const SearchPage = lazy(() => import('./SearchPage'));
const RandomGif = lazy(() => import('./RandomGif'));

function App() {
  const [title, setTitle] = useState('Top Gifs.');
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {

    // window.onpopstate = console.log(History);
    setPathname(window.location.pathname);

    switch (pathname) {
      case "/search":
        setTitle('Looking for Gifs ?');
        break;
      case "/random":
        setTitle("Lust for Gifs !");
        break;
      default:
        setTitle('Top Gifs.');
        break;
      
    };
    console.log(title);
    console.log(pathname);
  }, [pathname, title])

  return (
    <div className="App">

      <Router>
        <Header title={ title } />
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
