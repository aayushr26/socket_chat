import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription, BehaviorSubject } from 'rxjs';
import { BreadcrumbsService } from './breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  route: string;
  breadcrumbList: Array<any>;
  routeLinks: number;
  count: number;

  // constructor(location: Location, router: Router) {
  //     router.events.subscribe((val) => {
  //       if (location.path() !== '') {
  //         this.route = location.path();
  //         this.breadcrumbList = this.route.split('/');
  //         this.count = this.breadcrumbList.length;
  //       } else {
  //         this.route = 'Home';
  //       }
  //     });
  //   }
  //   ngOnInit() {
  //     console.log(this.breadcrumbList);
  //   }
  // }
  private $changes: Map<string, string> = new Map();
  subscription = new Subscription();
  private $baseUrlSteps: string[] = [];
  @Input()
  set baseUrl(url: string) {
    this.$baseUrlSteps = this._createSteps(url);
  }
  routeSteps: RouteStep[] = [];
  private $routeChange: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    router: Router,
    breadcrumb: BreadcrumbsService,
    private $route: ActivatedRoute,
  ) {
    this.subscription.add(
      router.events.subscribe(this.$routeChange.next.bind(this.$routeChange))
    )
    this.subscription.add(
      breadcrumb.events.subscribe(({ label, target }: any) => {
        this.$changes.set(target, label);
        ;
        this.routeSteps.forEach((step) => {
          if (step.label === target) {
            step.label = label;
          } 
        });
      })
    )
    this.subscription.add(
      breadcrumb.addQueryParams.subscribe(data => {
        this.routeSteps.forEach((step) => {
          if (step.label === data.label) {
            step.queryParams = data.queryParams;
          } 
        });
      })
    )
  }
  ngOnInit() {
    this.subscription.add(
      this.$routeChange.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.subscription.add(
            this.$route.params.subscribe(console.log)
          )
          let limit = event.urlAfterRedirects.lastIndexOf('?') >= 0 ? event.urlAfterRedirects.lastIndexOf('?') : event.urlAfterRedirects.length;
          const steps = this._createSteps(event.urlAfterRedirects.substr(0, limit));
          this.routeSteps = steps.reduce<{ [key: string]: any }>((data, step, index, arr) => {            
            if (step === 'dashboard') {
              return data;
            }
            // if (step === 'setup' || step === 'profile') {
            //   return data;
            // }
            if (step !== 'dashboard' && step !== this.$baseUrlSteps[index]) {
              const currentUrl = `${data.currentUrl}/${step}`;
              if (this.$changes.has(step)) {
                step = this.$changes.get(step);
              }
              
              return {
                currentUrl,
                steps: [...data.steps, new RouteStep(step, currentUrl)]
              };
            }
            return data;
          }, { currentUrl: '', steps: [] }).steps;
          
        }
      })
    )
  }

  private _createSteps(url: string): string[] {
    return url.split('/').filter(path => path !== '');
  }

  get finalSteps() {
    if (!this.routeSteps) { 
      return [];
     }
    return this.routeSteps.filter(item => item.label);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

class RouteStep {
  public queryParams: any;
  constructor(public label: string, public url: string) {
    this.label = `${label.substr(0, 1).toUpperCase()}${label.substring(1)}`;
  }
}