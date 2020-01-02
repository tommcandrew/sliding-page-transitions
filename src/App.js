import React, { useState, useEffect } from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './components/Home';
import Second from './components/Second';
import Third from './components/Third';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function App() {
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [homeDirection, setHomeDirection] = useState(null);
  const [secondDirection, setSecondDirection] = useState(null);
  const [thirdDirection, setThirdDirection] = useState(null);
  const [number, setNumber] = useState(0);

  const updatePageDirections = () => {
    let homeDirection, secondDirection, thirdDirection;

    if (currentPage === '/' && nextPage === '/second') {
      homeDirection = 'left';
      secondDirection = 'right';
      thirdDirection = null;
    } else if (currentPage === '/second' && nextPage === '/third') {
      homeDirection = null;
      secondDirection = 'left';
      thirdDirection = 'right';
    } else if (currentPage === '/third' && nextPage === '/') {
      homeDirection = 'right';
      secondDirection = null;
      thirdDirection = 'left';
    } else if (currentPage === '/third' && nextPage === '/second') {
      homeDirection = null;
      secondDirection = 'left';
      thirdDirection = 'right';
    } else if (currentPage === '/second' && nextPage === '/') {
      homeDirection = 'left';
      secondDirection = 'right';
      thirdDirection = null;
    } else if (currentPage === '/' && nextPage === '/third') {
      homeDirection = 'right';
      secondDirection = null;
      thirdDirection = 'left';
    }

    setHomeDirection(homeDirection);
    setSecondDirection(secondDirection);
    setThirdDirection(thirdDirection);
    setNumber(number + 1);
  };

  useEffect(() => {
    if (nextPage === null) {
      return;
    }
    updatePageDirections(nextPage);
    // eslint-disable-next-line
  }, [nextPage]);

  useEffect(() => {
    if (nextPage === null) {
      return;
    }
    history.push(nextPage);
    // eslint-disable-next-line
  }, [number]);

  return (
    <Router history={history}>
      <Route
        render={props => {
          return (
            <div className='page-container'>
              <TransitionGroup>
                <CSSTransition key={props.location.key} timeout={500}>
                  <Switch location={props.location}>
                    <Route
                      exact
                      path='/'
                      render={props => {
                        return (
                          <Home
                            direction={homeDirection}
                            setCurrentPage={setCurrentPage}
                            setNextPage={setNextPage}
                          />
                        );
                      }}
                    />
                    <Route
                      path='/second'
                      render={props => {
                        return (
                          <Second
                            direction={secondDirection}
                            setCurrentPage={setCurrentPage}
                            setNextPage={setNextPage}
                          />
                        );
                      }}
                    />
                    <Route
                      path='/third'
                      render={props => {
                        return (
                          <Third
                            direction={thirdDirection}
                            setCurrentPage={setCurrentPage}
                            setNextPage={setNextPage}
                          />
                        );
                      }}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          );
        }}
      />
    </Router>
  );
}

export default App;
