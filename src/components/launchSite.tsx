import {h, Component} from 'preact';
import {CompProps, CompState} from './launch';
import {LaunchSiteChart} from './launchSiteChart';

interface SitesList {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

interface SitesCount {
  id: string;
  name: string;
  count: number;
}

export class LaunchSite extends Component<CompProps, CompState> {
  
  normalize(data): SitesCount[] {
    const siteIds: Set<string> = new Set(data.map(item => item.launch_site.site_id));
    const sitesList: SitesList[] = data.map(item => item.launch_site);
    const sitesCount: SitesCount[] = [];

    for(const id of siteIds) {
      const sitesFiltered: SitesList[] = sitesList.filter(item => item.site_id === id);
      sitesCount.push({
        id,
        name: sitesFiltered[0].site_name_long,
        count: sitesFiltered.length
      });
    }
    return sitesCount;
  }

  render(props: CompProps) {
    return (
      <div class="chart">
        <LaunchSiteChart
          width={400}
          height={300}
          data={this.normalize(props.data)}
        />
      </div>
    );
  }
}
