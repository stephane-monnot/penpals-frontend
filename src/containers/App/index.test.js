import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router'
import App from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StaticRouter location="someLocation" context={{}}>
    <App />
  </StaticRouter>, div);
});
