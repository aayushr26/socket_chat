import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

interface IDate {
  label: string,
  startDate: FormControl,
  endDate: FormControl
}

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss']
})
export class DateFilterComponent implements OnInit, OnChanges, OnDestroy {
  maxStartDate = new Date();
  maxEndDate = new Date();
  minDate: Date = new Date(0);
  @Input() type: string;
  @Input() dateObject: IDate;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {

    if (!this.dateObject.startDate.value) {
      this.minDate = new Date(0);
    }

  }

  /*
    Method For Detecting Filter From Date Change
  */
  dateChange(event: MatDatepickerInputEvent<Date>) {
    let dateValue = event.value;
    let minFromDate = new Date(dateValue);
    this.minDate = new Date(minFromDate.getFullYear(), minFromDate.getMonth(), minFromDate.getDate());
    if (this.type === 'dashboard') {
      this.maxEndDate = new Date(minFromDate.setMonth(minFromDate.getMonth() + 1));
      if (this.maxEndDate.getTime() >= new Date().getTime()) {
        this.maxEndDate = new Date();
      }
    }

    this.dateObject.endDate.setValue('');
  }

  setToDate() {
    console.log(this.dateObject.endDate, this.dateObject.endDate.value, this.maxEndDate);
    this.dateObject.endDate.setValidators([])
    this.dateObject.endDate.updateValueAndValidity()
    if (this.dateObject.endDate.value) {
      let to = new Date(this.dateObject.endDate.value);
      to.setHours(23);
      to.setMinutes(59);
      to.setSeconds(59);
      this.dateObject.endDate.setValue(to)
    }
  }
  ngOnDestroy() {
    this.maxEndDate = null;
    this.minDate = null;
  }
}
