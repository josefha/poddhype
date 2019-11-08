import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './src/pages/AppWrapper.js';

import './src/common/fonts/index.less'

function App() {
  return (
    <AppWrapper />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
