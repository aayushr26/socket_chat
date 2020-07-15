import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { UtilityService } from '../../../services/utility.service';
import { Pagination } from 'src/app/models/pagination';
import { NO_RECORDS, SORTING_FILTER, MOOD_DATA, REPORTED_SORTING, POPUP_MESSAGES, POST_MESSAGE, LOADING } from '../../../../../constant/messages/messages';
import { PostListService } from '../service/post-list.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss', '../../../../../components/mat-table-rendered/mat-table-rendered.component.scss']
})
export class PostListComponent extends Pagination implements OnInit, OnChanges {
  isFilterOpen: boolean = false;
  myTableData: any;

  sortingFilter = [];
  @Input() userId: string;
  @Input() type: string;
  @Input() form;
  @Output() postCount = new EventEmitter();
  @Input() dashboardType: string;
  displayedColumns: string[] = [];
  postList: MatTableDataSource<any>;
  myPage: any;
  filterForm: FormGroup;
  listingDate: { label: string; startDate: FormControl; endDate: FormControl; };
  noRecords: string = LOADING;
  selected: string;
  filterObject;
  showLoader: boolean = true;
  constructor(
    private _formService: FormService,
    private _utilityService: UtilityService,
    private _postService: PostListService,
  ) {
    super();
    this.postList = new MatTableDataSource<any>([]);
    this.filterForm = this._postService.getFilterForm();
    this.filterObject = this._postService.filterObject;
  }

  ngOnInit() {
    this.dateFilter();

  }
  dateFilter() {
    this.listingDate = {
      label: 'Schedule Date',
      startDate: this.getFormControl('fromDate'),
      endDate: this.getFormControl('toDate')
    };
  }

  ngOnChanges() {
    console.log(this.type);

    if (this.type === 'reported') {
      this.displayedColumns = ['s.no', 'postPreview', 'postDetail', 'normal-reported', 'emergency-reported', 'status', 'action']
      this.sortingFilter = REPORTED_SORTING;
    }
    else if (this.type === 'user' || this.type === 'dashboard') {
      this.displayedColumns = ['s.no', 'postPreview', 'postDetail', 'totalLikes', 'totalDislikes', 'reported', 'status', 'action'];
      this.sortingFilter = SORTING_FILTER;
    }

    this.fetchPostList()
  }


  getFormControl(control) {
    return this.filterForm.controls[control] as FormControl;
  }


  fetchPostList() {
    let data;
    if (this.type === 'user') { // User detail page
      data = { ...this.validPageOptions, ...this.filterForm.value, id: this.userId, action: 'post' };
    }
    else if (this.type === 'reported') { // for reported page
      data = { ...this.validPageOptions, ...this.filterForm.value, action: 'post' }
    }
    else if (this.type === 'dashboard') { // for dashboard 
      if (this.dashboardType === 'all') { // all posts
        this.form ? data = { ...this.validPageOptions, ...this.form } : data = { ...this.validPageOptions }
      }
      else { // trending posts
        this.form ? data = { ...this.validPageOptions, ...this.form, sorting: '2' } : data = { ...this.validPageOptions, sorting: '2' }
      }
    }

    this._postService.getPostListing(data, this.type).subscribe(
      (response) => {
        if (response.statusCode == 200) {
          this.myTableData = response.data['data']
          this.postList = new MatTableDataSource<any>(this.myTableData);
          this.total = response.data['total'];

          if (this.type === 'user') {// count emit in user detail 
            this.postCount.emit(this.total);
          }
          // if ( this.type =='dashboard'){
          //   this._postService.dashboardCount.next(response.data['count']);
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
    if (this.total == 0) { return; }
    this.fetchPostList();
  }

  /**
   * @description method for search
   * @param event search value
   */
  setSearch(event) {
    this.search = event;
    this.resetPages();
    this.fetchPostList();
  }

  //apply filter if filterform have any value
  applyFilter() {
    if (this._formService.formValue(this.filterForm))
      this.fetchPostList();
  }

  //reset filter if filterform have any value
  resetFilter() {
    if (this._formService.formValue(this.filterForm)) {
      this.filterForm.reset();
      this.dateFilter(); // removing mindate from date filter
      this.fetchPostList()
    }
  }

  //action (block, unblock, delete)
  changeStatus(status: string, id, i) {
    const body = {
      action: status, id
    }
    let data = {
      title: POPUP_MESSAGES.confrim,
      message: `Are you sure you want to ${status == 'block' ? 'block' : status == 'delete' ? 'delete' : 'unblock'} this post ?`
    }
    this._utilityService.openDialog(data).subscribe(result => {
      if (result) {
        this._postService.changeStatus(body).subscribe(data => {
          if (data.statusCode == 200) {
            this._utilityService.showAlert(status == 'block' ? POST_MESSAGE.POST_BLOCK : status == 'active' ? POST_MESSAGE.POST_UNBLOCK : POST_MESSAGE.POST_DELETE);
            if (status == 'block' || status == 'active') {
              this.myTableData[i].status = status;
            }
            else {
              this.fetchPostList();
            }
          }
        }, (err => { })
        )
      }
    })
  }

  //Mood
  setMood(event) {
    this.selected = MOOD_DATA[event.value]
  }
}
