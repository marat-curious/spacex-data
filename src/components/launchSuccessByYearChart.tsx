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

interface MarginClass {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export class LaunchSuccessByYearChart extends Component<ChartProps, ChartState> {
  
  readonly margin: MarginClass;

  constructor(props: ChartProps) {
    super(props);
    this.xAxis = this.xAxis.bind(this);
    this.yAxis = this.yAxis.bind(this);
    this.margin = {top: 20, right: 20, bottom: 20, left: 20};

  }

  x() {
    return d3
      .scaleBand()
      .domain(Object.keys(this.props.data))
      .rangeRound([0, this.props.width])
    ;
  }

  y() {
    const data = this.props.data;
    const keys = Object.keys(data);
    return d3
      .scaleLinear()
      .domain([0, d3.max(keys.map(key => data[key].success + data[key].fail))])
      .rangeRound([this.props.height, 0])
    ;
  }

  xAxis(g) {
    return g
      .attr('transform', `translate(0, ${this.props.height})`)
      .call(d3.axisBottom(this.x()))
    ;
  }

  yAxis(g) {
    return g
      .call(d3.axisLeft(this.y()))
    ;
  }

  group(node) {
    const g = d3
      .select(node)
      .append('g')
        .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
        
    ;
    g.append('g')
      .call(this.xAxis)
    ;
    g.append('g')
      .call(this.yAxis)
    ;
  }

  render() {
    return (
      <div class="chart chart_launch-sucess-by-year">
        <svg
          width={this.props.width + (this.margin.left + this.margin.right)}
          height={this.props.height + (this.margin.top + this.margin.bottom)}
          ref={node => this.group(node)}
        />
      </div>
    );
  }
}
