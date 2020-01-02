import React, { useEffect } from 'react';

const Third = props => {
  useEffect(() => {
    props.setCurrentPage('/third');
    // eslint-disable-next-line
  }, []);
  return (
    <div className={'third ' + props.direction}>
      <h1>Third Page</h1>
      <span onClick={() => props.setNextPage('/second')}>
        ← Go to Second Page
      </span>
      <span onClick={() => props.setNextPage('/')}>Go to First Page →</span>
    </div>
  );
};

export default Third;
