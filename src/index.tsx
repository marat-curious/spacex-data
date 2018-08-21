import {h, render} from 'preact';
import Router from 'preact-router';
import {Home} from './home';
import './main.css';

const App = () => (
  <Router>
    <Home path="/" name="working" />
  </Router>
);

render(<App />, document.getElementById('root'));
