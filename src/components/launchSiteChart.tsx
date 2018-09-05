import {h, Component} from 'preact';
import * as d3 from 'd3';

interface Props {
  width: number;
  height: number;
  data: Array<{
    id: string;
    name: string;
    count: number;
  }>;
}

interface State {}

export class LaunchSiteChart extends Component<Props, State> {
  
  constructor(props) {
    super(props);
  }

  pack() {
    return d3
      .pack()
      .size([this.props.width, this.props.height])
      (d3.hierarchy({children: this.props.data})
        .sum(d => d.count))
      ;
  }

  group(node): void {
    const root = this.pack();
    const svg = d3.select(node);
    const leaf = svg
      .selectAll('g')
      .data(root.leaves())
      .enter().append('g')
        .attr('transform', d => `translate(${d.x + 1}, ${d.y + 1})`)
    ;
    leaf
      .append('circle')
      .attr('r', d => d.r)
      .attr('fill', '#fff')
    ;
  }

  render() {
    return (
      <div class="chart__launch-site">
        <svg
          width={this.props.width}
          height={this.props.height}
          ref={node => this.group(node)}
        />
      </div>
    );
  }
}
