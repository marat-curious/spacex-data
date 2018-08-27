import {h, Component} from 'preact';
import {Header} from './header';

export interface AppProps {
  data: {};
}

export interface AppState {}

export class Launch extends Component<AppProps, AppState> {
  render(props: AppProps) {
    return (
      <div class="page page_home">
        <Header />
      </div>
    );
  }
}
