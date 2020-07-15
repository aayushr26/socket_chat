import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Pagination } from 'src/app/models/pagination';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { UserFriendService } from '../service/user-friend.service';
import { FormGroup, FormControl } from '@angular/forms';
import { USER_REPORTED_SORTING, NO_RECORDS, LOADING, displayedColumn } from '../../../../../../constant/messages/messages';
import { USER_DETAIL } from 'src/app/constant/absolute-routes/absolute-routes';
import { FormService } from 'src/app/modules/shared/services/form.service';

@Component({
  selector: 'app-user-friend',
  templateUrl: './user-friend.component.html',
  styleUrls: ['./user-friend.component.scss', '../../../../../../components/mat-table-rendered/mat-table-rendered.component.scss']
})
export class UserFriendComponent extends Pagination implements OnInit, OnChanges {
  myTableData: any[];
  isFilterOpen: boolean = false;
  @Input() type: string;
  @Input() userId: string;
  sortFilter = USER_REPORTED_SORTING;
  userList: MatTableDataSource<any>;
  myPage: any;
  filterForm: FormGroup;
  noRecord: string = LOADING;
  displayedColumns: string[];
  showLoader: boolean = true;
  listingDate: { label: string; startDate: FormControl; endDate: FormControl; };
  constructor(
    private _userfriendService: UserFriendService,
    private _formService: FormService,
    private _router: Router) {
    super();
    this.userList = new MatTableDataSource<any>([]);
    this.filterForm = this._userfriendService.getFilterForm();
  }

  ngOnInit() {
    this.dateFilter();
  }
  dateFilter() {
    this.listingDate = {
      label: 'Schedule Date',
      startDate: this.getControl('fromDate'),
      endDate: this.getControl('toDate')
    };
  }

  ngOnChanges() {
    if (this.userId) {
      this.fetchUserList();
      this.displayedColumns = displayedColumn(this.type);
    }

  }

  /**
   * Method for getting control
   * @param control Form Control
   */
  getControl(control) {
    return this.filterForm.controls[control] as FormControl;
  }

  /**
   * Method for user list under user detail
   */
  fetchUserList() {
    let data = { ...this.validPageOptions, ...this.filterForm.value, id: this.userId, action: this.type };
    this._userfriendService.getUserListing(data).subscribe(
      (response) => {
        if (response) {
          this.showLoader = false;
          if (this.type === 'friends') {
            if (response.data['data'] && response.data['data'][0]['users']) {
              this.myTableData = response.data['data'];
              this.total = response.data['total']
              !this.total ? this.noRecord = NO_RECORDS : this.noRecord = ''
            }
            else {
              this.myTableData = [];
              this.total = 0
              this.noRecord = NO_RECORDS;
            }
          }
          else {
            this.myTableData = response.data['data'];
            this.total = response.data['total']
            !this.total ? this.noRecord = NO_RECORDS : this.noRecord = ''
          }
          this.userList = new MatTableDataSource<any>(this.myTableData);

        }
      }, (err => { })
    )
  }

  /*
    Method For Changing The Pagination
  */
  changePage(event: MatPaginator) {
    this.pageOptionsOnChange = event;
    if (this.total == 0) { return; }
    this.fetchUserList();
  }

  /**
   * @description Method for searching
   * @param event search value
   */
  setSearch(event) {
    this.search = event;
    this.resetPages();
    this.fetchUserList();
  }
  /**
 * Apply filter
 */
  applyFilter() {
    if (this._formService.formValue(this.filterForm)) { this.fetchUserList() }
  }

  /**
   * Reset Filter
   */
  resetFilter() {
    if (this._formService.formValue(this.filterForm)) {
      this.filterForm.reset();
      this.dateFilter();
      this.fetchUserList()
    }
  }

  //Open Route
  openProfile(id) {
    this._router.navigate([USER_DETAIL, id])
  }
}
