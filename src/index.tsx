import {h, render, Component} from 'preact';
import Router from 'preact-router';
import {Home} from './components/home';
import {fetchData} from './actions';
import './styles/main.css';

export interface AppProps {}

export interface AppState {
  data: {};
}

class App extends Component<AppProps, AppState> {
  constructor() {
    super();
    this.state = {data: {}};
  }
  async componentDidMount() {
    try {
      const response = await fetchData();
      const data = await response.json();
      this.setState({data});
    } catch(e) {
      throw new Error(e);
    }
  }
  render() {
    return (
      <Router>
        <Home path="/" data={this.state}/>
      </Router>
    );
  }
}

render(<App/>, document.getElementById('root'));
