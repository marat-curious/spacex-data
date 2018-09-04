import {h, Component} from 'preact';
import {CompProps, CompState} from './launch';

export class LaunchSite extends Component<CompProps, CompState> {
  
  normalize(data) {
    const siteIds: Set<string> = new Set(data.map(item => item.launch_site.site_id));
    const sites: Array<{id: string; name: string; launches: number}> = [];
    for(const item of data) {
      if(siteIds.has(item.launch_site.site_id)) {
        sites.push({
          id: item.launch_site.site_id,
          name: item.launch_site.site_name_long,
          launches: 0
        });
        siteIds.delete(item.launch_site.site_id);
      }
    }
  }

  render(props: CompProps) {
    this.normalize(props.data);
    return <div />;
  }
}
