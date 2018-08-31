import {h, Component} from 'preact';
import * as d3 from 'd3';

interface ChartProps {
  width: number;
  height: number;
  data: {
    [year: string]: {
      success: number;
      fail: number;
    }
  };
}

interface ChartState {
}

function Axis(data: {width: number, height: number}) {
  const x = d3
    .scaleBand()
    .rangeRound([0, data.width])
    .paddingInner(0.05)
    .align(0.1)
  ;
  const y = d3
    .scaleLinear()
    .rangeRound([data.height, 0])
  ;
  return x;
}

function Bars(data) {
  const x = Axis({width: data.width, height: data.height});
  x.domain(Object.keys(data.data).map(d => d));
}

export class LaunchSuccessByYearChart extends Component<ChartProps, ChartState> {
  
  constructor(props: ChartProps) {
    super(props);
  }

  group(node) {
    const g = d3
      .select(node)
      .append('g')
    ;
  }

  render() {
    return (
      <div class="chart chart_launch-sucess-by-year">
        <svg
          width={this.props.width}
          height={this.props.height}
          ref={node => this.group(node)}
        />
      </div>
    );
  }
}
