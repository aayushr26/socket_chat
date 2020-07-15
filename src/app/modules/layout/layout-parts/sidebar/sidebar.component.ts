import { Component, OnInit, NgZone } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import * as routes from '../../../../constant/absolute-routes/absolute-routes'
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showSettingSidebar: boolean = false;

  constructor(
    private ngZone: NgZone,
    private _router: Router
  ) {
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
        event.url.includes('setting') ? this.showSettingSidebar = true : this.showSettingSidebar = false
      });

  }

  ngOnInit() {}

  //Reload the component if on same route
  reloadComponent(link) {
    if (this._router.url.includes(routes[link])) {
      this._router.routeReuseStrategy.shouldReuseRoute = () => false;
      this._router.onSameUrlNavigation = 'reload';
      this.ngZone.run(() => this._router.navigate([routes[link]]));
    }
    else {
      return;
    }

  }

}
