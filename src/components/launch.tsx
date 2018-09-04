import {h, Component} from 'preact';
import {Header} from './header';
import {LaunchSuccess} from './launchSuccess';
import {LaunchSite} from './launchSite';

export interface CompProps {
  data: {};
}

export interface CompState {}

export class Launch extends Component<CompProps, CompState> {
  render(props: CompProps) {
    return (
      <div class="page page_home">
        <Header />
        <LaunchSuccess data={props.data} />
        <LaunchSite data={props.data} />
      </div>
    );
  }
}
