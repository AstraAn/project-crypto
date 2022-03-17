import React from 'react';
import List from './containers/List';
import Adding from './containers/Adding';

const App =() => {
  return (
    <div className="page">
      <Adding />
      <List />
    </div>
  )
};

export default App;
