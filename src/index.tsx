import {h, render, Component} from 'preact';
import Router from 'preact-router';
import {Launch} from './components/launch';
import {fetchData} from './actions';
import './styles/main.css';

export interface AppProps {}

export interface AppState {
  data: {};
  show: boolean;
  error?: {};
}

class App extends Component<AppProps, AppState> {

  constructor() {
    super();
    this.state = {data: {}, show: false};
  }

  async componentDidMount() {
    try {
      const response = await fetchData();
      const data = await response.json();
      this.setState({data, show: true});
    } catch(e) {
      this.setState({data: {}, show: false, error: e});
      throw new Error(e);
    }
  }

  render() {
    if (this.state.show) {
      return (
        <Router>
          <Launch path="/" data={this.state.data}/>
        </Router>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

render(<App/>, document.getElementById('root'));
