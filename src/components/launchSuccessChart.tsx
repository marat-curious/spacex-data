import {h, Component} from 'preact';
import * as d3 from 'd3';

interface ChartProps {
  width: number;
  height: number;
  data: [number, number];
}

interface ChartState {
}


function Arc(props: ChartProps) {
  const colors = ['#ED6A5A', '#F4F1BB', '#9BC1BC', '#5CA4A9', '#E6EBE0'];
  const radius = Math.min(props.width, props.height)/2;
  const arc = d3
    .arc()
    .outerRadius(radius)
    .innerRadius(radius - 30)
  ;
  const paths = d3
    .pie()(props.data)
    .map((val, i) => (
      <path d={arc(val)} key={i} fill={colors[i]} />
    )
  );
  return (
    <g transform={`translate(${props.width/2},${props.height/2})`}>{paths}</g>
  );
}

export class LaunchSuccessChart extends Component<ChartProps, ChartState> {
  render(props: ChartProps) {
    return (
      <svg width={props.width} height={props.height}>
        <Arc width={props.width} height={props.height} data={props.data} />
      </svg>
    );
  }
}
