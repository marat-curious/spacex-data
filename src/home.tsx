import {h, Component} from 'preact';

export interface AppProps {
  name: string
}

interface AppState {
  name: string
}

export class Home extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {name: props.name};
  }
  render(props: AppProps, state: AppState) {
    return <h1>props: {props.name}, state: {state.name}</h1>;
  }
}
