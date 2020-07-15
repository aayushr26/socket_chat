import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class BreadcrumbsService {
  private _subject: Subject<{}> = new Subject();
  addQueryParams: Subject<any> = new Subject();
  get events() {
    return this._subject.asObservable();
  }
  constructor() { }
  replace(target: string, label: string) {
    this._subject.next({target, label});
  }
}