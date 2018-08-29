import {h, Component} from 'preact';
import {CompProps, CompState} from './launch';
import {LaunchSuccessChart} from './launchSuccessChart';

export class LaunchSuccess extends Component<CompProps, CompState> {
  count (data): Array<{label: string, count: number}> {
    const success = data.filter(item => item.launch_success).length;
    const fail = data.length - success;
    return [
      {label: 'Удачный запуск', count: success},
      {label: 'Неудачный запуск', count: fail}
    ];
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
