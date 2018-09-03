import {h, Component} from 'preact';
import * as d3 from 'd3';

interface ChartProps {
  width: number;
  height: number;
  data: Array<{
    year: number;
    success: number;
    fail: number;
  }>;
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
  readonly colors: string[];

  constructor(props: ChartProps) {
    super(props);
    this.xAxis = this.xAxis.bind(this);
    this.yAxis = this.yAxis.bind(this);
    this.margin = {top: 20, right: 20, bottom: 20, left: 20};
    this.colors = ['#4FBC9A', '#E4DA90'];

  }

  max() {
    return d3.max(this.props.data.map(item => item.success + item.fail));
  }

  x() {
    return d3
      .scaleBand()
      .domain(this.props.data.map(item => item.year))
      .rangeRound([0, this.props.width])
      .padding(0.2)
    ;
  }

  y() {
    return d3
      .scaleLinear()
      .domain([0, this.max()])
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
    const rG = g.selectAll('g')
      .data(this.props.data)
      .enter()
      .append('g')
    ;
    rG.append('rect')
      .attr('x', d => this.x()(d.year))
      .attr('y', d => this.y()(d.success))
      .attr('height', d => this.y()(this.max() - d.success))
      .attr('width', this.x().bandwidth())
      .attr('fill', this.colors[0])
    ;
    rG.append('rect')
      .attr('x', d => this.x()(d.year))
      .attr('y', d => this.y()(d.fail))
      .attr('height', d => this.y()(this.max() - d.fail))
      .attr('width', this.x().bandwidth())
      .attr('fill', this.colors[1])
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
      <div class="chart__launch-sucess-by-year">
        <svg
          width={this.props.width + (this.margin.left + this.margin.right)}
          height={this.props.height + (this.margin.top + this.margin.bottom)}
          ref={node => this.group(node)}
        />
      </div>
    );
  }
}
