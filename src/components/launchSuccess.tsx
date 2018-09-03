import {h, Component} from 'preact';
import {CompProps, CompState} from './launch';
import {LaunchSuccessChart} from './launchSuccessChart';
import {LaunchSuccessByYearChart} from './launchSuccessByYearChart';

interface EnumCountYear {
  [index: number]: {
    year: number;
    sucess: number;
    fail: number;
  };
}

interface EnumCountByYear {
  year: number;
  success: number;
  fail: number;
}

export class LaunchSuccess extends Component<CompProps, CompState> {
  count(data): Array<{label: string, count: number}> {
    const success = data.filter(item => item.launch_success).length;
    const fail = data.length - success;
    return [
      {label: 'Удачный запуск', count: success},
      {label: 'Неудачный запуск', count: fail}
    ];
  }

  countByYear(data) {
    const years: Set<string> = new Set(data.map(item => item.launch_year));
    const launchStatusByYear = [];
    for(const year of years) {
      launchStatusByYear.push({year, success: 0, fail: 0});
    }
    const yearsArray = [...years];
    for(const item of data) {
      if(item.launch_success) {
        launchStatusByYear[yearsArray.indexOf(item.launch_year)].success++;
      } else {
        launchStatusByYear[yearsArray.indexOf(item.launch_year)].fail++;
      }
    }
    return launchStatusByYear;
  }

  render(props: CompProps) {
    return (
      <div class="chart">
        <LaunchSuccessChart
          width={300}
          height={300}
          data={this.count(props.data)}
        />
        <LaunchSuccessByYearChart
          width={400}
          height={200}
          data={this.countByYear(props.data)}
        />
      </div>
    );
  }
}
