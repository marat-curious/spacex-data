import {h, Component} from 'preact';
import * as d3 from 'd3';

interface ChartProps {
  width: number;
  height: number;
  data: Array<{
    label: string;
    count: number;
  }>;
}

interface ChartState {
}


function Arc(props: ChartProps) {
  const colors = ['#4FBC9A', '#E4DA90', '#5CA4A9', '#7ED137', '#A0CA9A', '#73A2B1', '#E47773'];
  const radius = Math.min(props.width, props.height)/4;
  const values = props.data.map(item => item.count);
  const label = props.data.map(item => item.label);
  const arc = d3
    .arc()
    .outerRadius(radius)
    .innerRadius(radius - 30)
  ;
  const arcOuter = d3
    .arc()
    .outerRadius(radius + 20)
    .innerRadius(radius + 20)
  ;
  const paths = d3
    .pie()(values)
    .map((item, i) => {
      return <path d={arc(item)} key={i} fill={colors[i]} />;
    })
  ;
  const labels = d3
    .pie()(values)
    .map((item, i) => (
      <g>
        <text
          x={arcOuter.centroid(item)[0]} y={arcOuter.centroid(item)[1]}
          dx=".35em" dy=".35em"
          fill="#fff" stroke="#fff"
        >{label[i]}</text> 
      </g>
    ))
  ;
  const lines = d3
    .pie()(values)
    .map((item, i) => (
      <line
        x1={arc.centroid(item)[0]} y1={arc.centroid(item)[1]}
        x2={arcOuter.centroid(item)[0]} y2={arcOuter.centroid(item)[1]}
        stroke="#fff"
        stroke-width="2"
      />
    ))
  ;
  return (
    <g transform={`translate(${props.width/2},${props.height/2})`}>
      {paths}
      {lines}
      {labels}
    </g>
  );
}

export class LaunchSuccessChart extends Component<ChartProps, ChartState> {
  render(props: ChartProps) {
    return (
      <div class="chart chart_launch-success">
        <svg width={props.width} height={props.height}>
          <Arc width={props.width} height={props.height} data={props.data} />
        </svg>
      </div>
    );
  }
}
