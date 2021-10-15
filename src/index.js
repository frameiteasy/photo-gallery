import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld/HelloWorld.jsx';

ReactDOM.render(
  <HelloWorld 
    name="Konrad"
    message="Have fun!"
  />, 
  document.getElementById('root')
);