import {h, Component} from 'preact';
import {CompProps, CompState} from './launch';
import {LaunchSuccessChart} from './launchSuccessChart';

export class LaunchSuccess extends Component<CompProps, CompState> {
  count (data): [number, number] {
    const success = data.filter(item => item.launch_success).length;
    const fail = data.length - success;
    return [success, fail];
  }

  render(props: CompProps) {
    return (
      <div>
        <LaunchSuccessChart
          width={300}
          height={300}
          data={this.count(props.data)}
        />
      </div>
    );
  }
}
