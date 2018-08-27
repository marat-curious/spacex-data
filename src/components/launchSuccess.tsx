import {h, Component} from 'preact';
import {CompProps, CompState} from './launch';

export class LaunchSuccess extends Component<CompProps, CompState> {
  count (data) {
    return {
      success: data.filter(item => item.launch_success).length,
      all: data.length
    };
  }

  render(props: CompProps) {
    return (
      <pre>
        {this.count(props.data).success}/
        {this.count(props.data).all} / 
        LaunchSuccess Component
      </pre>
    );
  }
}
