import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Pagination } from 'src/app/models/pagination';
import { MatTableDataSource, MatDialog, MatPaginator } from '@angular/material';
import { UtilityService } from '../../../services/utility.service';
import { UserList } from 'src/app/models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { NO_RECORDS, USER_MESSAGE, REPORTED_SORTING, POPUP_MESSAGES, LOADING } from '../../../../../constant/messages/messages';
import { UserListService } from '../service/user-list.service';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss', '../../../../../components/mat-table-rendered/mat-table-rendered.component.scss']
})
export class UserListComponent extends Pagination implements OnInit, OnChanges {

  myTableData: any;
  displayedColumns: string[] = [];
  isFilterOpen = false;
  showFilter: boolean = false;
  filterObject;
  sortFilter = [];
  noRecords: string = LOADING;
  userList: MatTableDataSource<any>;
  myPage: any;
  filterForm: FormGroup;
  @Input() type: string;
  @Input() dashboardType: string;
  @Input() form;
  listingDate: { label: string; startDate: FormControl; endDate: FormControl; };
  showLoader: boolean = true;
  constructor(
    private _userListService: UserListService, private _formService: FormService,
    private _dialog: MatDialog, private _utilityService: UtilityService,
  ) {
    super();
    this.userList = new MatTableDataSource([]);
    this.filterForm = this._userListService.getFilterForm();
    this.filterObject = this._userListService.filterObject;
  }


  ngOnInit() {
    this.dateFilter();
  }
  dateFilter() {
    this.listingDate = {
      label: 'Schedule Date',
      startDate: this.getControlForm('fromDate'),
      endDate: this.getControlForm('toDate')
    };
  }

  ngOnChanges() {
    if (this.type === 'reported') {
      this.displayedColumns = ['s.no', 'profilePicture', 'profileDetail', 'normal-reported', 'emergency-reported', 'status', 'action'];
      this.sortFilter = REPORTED_SORTING;
    }

    else if (this.type === 'dashboard') {
      if (this.dashboardType === 'all') {
        this.displayedColumns = ['s.no', 'profilePicture', 'profileDetail', 'buddyDetail', 'reported', 'status', 'action'];
      }
      else {
        this.displayedColumns = ['s.no', 'profilePicture', 'profileDetail', 'hapiness-score', 'reported', 'status', 'action'];
      }
    }
    this.fetchUserList();
  }

  getControlForm(control) {
    return this.filterForm.controls[control] as FormControl;
  }

  /*
      Fetching user list after applying filters and pagination
  */
  fetchUserList() {
    let data;
    if (this.type == 'reported') {
      data = { ...this.validPageOptions, ...this.filterForm.value, action: 'user' };
    }
    else {
      if (this.dashboardType === 'all' || this.dashboardType === 'active') {
        data = { ...this.validPageOptions, ...this.form };
      }
      else if (this.dashboardType === 'happiness') {
        data = { ...this.validPageOptions, ...this.form, sorting: '5' };
      }

    }
    this._userListService.getUserListing(data, this.type).subscribe(
      (response) => {
        if (response) {
          this.myTableData = response.data['data']
          this.userList = new MatTableDataSource<UserList>(this.myTableData);
          this.total = response.data['total'];
          // if (this.type === 'dashboard') {
          //   this._userListService.count.next(response.data['count'])
          // }
          this.showLoader = false;
          !this.total ? this.noRecords = NO_RECORDS : this.noRecords = ''
        }
      }, (err => { })
    )
  }

  /*
    Method For Changing The Pagination
  */
  changePage(event: MatPaginator) {
    this.pageOptionsOnChange = event;
    if (this.total == 0) {
      return;
    }
    this.fetchUserList();
  }

  /*
    Method For Searching
  */
  setSearch(event) {
    this.search = event;
    this.resetPages();
    this.fetchUserList();
  }

  /*
    Method For Changing Status Of The User ( BLOCK,UNBLOCK,DELETE ) 
  */
  changeStatus(status: string, userId: string, i) {
    const body = {
      action: status,
      id: userId
    }
    let data = {
      title: POPUP_MESSAGES.confrim,
      message: `Are you sure you want to ${status == 'block' ? 'block' : status == 'delete' ? 'delete' : 'unblock'} this user ?`
    }
    this._utilityService.openDialog(data).subscribe(result => {
      if (result) {
        this._userListService.changeStatus(body).subscribe(data => {
          if (data.statusCode == 200) {
            this._utilityService.showAlert(status == 'block' ? USER_MESSAGE.BLOCK : status == 'active' ? USER_MESSAGE.UNBLOCK : USER_MESSAGE.DELETE);
            if (status == 'block' || status == 'active') {
              this.myTableData[i].status = status;
            }
            else {
              this.fetchUserList();
            }
          }
        }, (err => { })
        )
      }
    })
  }
  /**
   * Apply filter
   */
  applyFilter() {
    if (this._formService.formValue(this.filterForm))
      this.fetchUserList()
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

}
