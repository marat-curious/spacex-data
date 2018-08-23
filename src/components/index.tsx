import {h, render} from 'preact';
import Router from 'preact-router';
import {Home} from './home';
import '../styles/main.css';

render((
  <Router>
    <Home path="/" name="working" />
  </Router>
), document.getElementById('root'));
