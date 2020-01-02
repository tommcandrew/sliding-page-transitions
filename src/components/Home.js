import React, { useEffect } from 'react';

const Home = props => {
  useEffect(() => {
    props.setCurrentPage('/');
    // eslint-disable-next-line
  }, []);
  return (
    <div className={'home ' + props.direction}>
      <h1>Home Page</h1>
      <span onClick={() => props.setNextPage('/third')}>
        ← Go to Third Page
      </span>
      <span onClick={() => props.setNextPage('/second')}>
        Go to Second Page →
      </span>
    </div>
  );
};

export default Home;
