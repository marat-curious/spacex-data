import {h, Component} from 'preact';
import {Header} from './header';

export interface AppProps {
  name: string;
}

interface AppState {
  name: string;
}

export class Home extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {name: props.name};
  }
  render(props: AppProps, state: AppState) {
    return (
      <div class="page page_home">
        <Header />
        <h1>props: {props.name}, state: {state.name}</h1>
      </div>
    );
  }
}
