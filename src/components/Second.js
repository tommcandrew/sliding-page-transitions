import React, { useEffect } from 'react';

const Second = props => {
  useEffect(() => {
    props.setCurrentPage('/second');
    // eslint-disable-next-line
  }, []);
  return (
    <div className={'second ' + props.direction}>
      <h1>Second Page</h1>
      <span onClick={() => props.setNextPage('/')}>← Go to First Page</span>
      <span onClick={() => props.setNextPage('/third')}>
        Go to Third Page →
      </span>
    </div>
  );
};

export default Second;
