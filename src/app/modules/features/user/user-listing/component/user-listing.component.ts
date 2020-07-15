import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserListingService } from '../service/user-listing.service';
import { Pagination } from '../../../../../models/pagination';
import { CONFIRMATION, NO_RECORDS, USER_MESSAGE, LOADING } from '../../../../../constant/messages/messages';
import { UserList } from '../../../../../models/user';
import { UtilityService } from '../../../../../modules/shared/services/utility.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FormService } from 'src/app/modules/shared/services/form.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss', '../../../../../components/mat-table-rendered/mat-table-rendered.component.scss'],
})
export class UserListingComponent extends Pagination implements OnInit, OnDestroy {

  isFilterOpen = false;
  showFilter: boolean = false;
  showData: boolean = true;
  myTableData: any[] = [];
  filterObject;
  displayedColumns: string[] = ['s.no', 'profilePicture', 'profileDetail', 'buddyDetail', 'reported', 'createdAt', 'updatedAt', 'status', 'action'];
  noRecords: string = LOADING;
  userList: MatTableDataSource<any>;
  myPage: any;
  filterForm: FormGroup;
  subscription: Subscription;
  listingDate: { label: string; startDate: FormControl; endDate: FormControl; };

  constructor(
    private _userListingService: UserListingService, private _utilityService: UtilityService, private _formService: FormService
  ) {
    super();
    this.userList = new MatTableDataSource<UserList>([]);
    this.filterObject = this._userListingService.filterObject;
    this.filterForm = this._userListingService.getFilterForm();
  }


  ngOnInit() {
    this.fetchUserList();
    this.dateFilter();
  }

  dateFilter() {
    this.listingDate = {
      label: 'Schedule Date',
      startDate: this.getControl('fromDate'),
      endDate: this.getControl('toDate')
    };
  }

  //getter for form control
  getControl(control) {
    return this.filterForm.controls[control] as FormControl;
  }

  /*
      Fetching user list after applying filters and pagination
  */
  fetchUserList() {
    let data = { ...this.validPageOptions, ...this.filterForm.value };
    this._userListingService.getUserListing(data).subscribe(
      (response) => {
        if (response) {
          this.myTableData = response.data['data']
          this.userList = new MatTableDataSource<UserList>(this.myTableData);
          this.total = response.data.total;
          this.showData = false;
          !this.total ? this.noRecords = NO_RECORDS : this.noRecords = '';
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
  changeStatus(status: string, id: string, i) {
    const body = {
      action: status, id
    }
    let data = {
      title: CONFIRMATION,
      message: `Are you sure you want to ${status == 'block' ? 'block' : status == 'delete' ? 'delete' : 'unblock'} this user ?`
    }
    this._utilityService.openDialog(data).subscribe(result => {
      if (result) {
        this._userListingService.changeStatus(body).subscribe(data => {
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
      this.fetchUserList();
  }

  /**
   * Reset Filter
   */
  resetFilter() {
    if (this._formService.formValue(this.filterForm)) {
      this.filterForm.reset();
      this.dateFilter();
      this.fetchUserList();
    }
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
