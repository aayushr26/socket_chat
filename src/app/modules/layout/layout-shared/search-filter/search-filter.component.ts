import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { pairwise, debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  @Input() placeholder;
  @Output() setSearch = new EventEmitter();
  searchControl = new FormControl('');
  search: string = '';
  searchSubscription: Subscription;
  constructor() {
  }

  ngOnInit() {
    this.searchSubscription = this.searchControl
      .valueChanges
      .pipe(
        pairwise(),
        debounceTime(500)
      )
      .subscribe(([prev, next]: [any, any]) => {
        if (next == '') {
          this.resetSearch();
        }
        else {
          this.searchResult();
        }

      });

  }
  searchResult() {
    if (this.searchControl.value && this.searchControl.value.trim()) {
      this.setSearch.emit(this.searchControl.value.toLocaleLowerCase().trim());

    }
  }
  resetSearch() {
    this.searchControl.reset();
    this.setSearch.emit('');
  }
  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
