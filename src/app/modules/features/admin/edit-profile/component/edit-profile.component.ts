import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileUploadService } from '../../../../shared/services/file-upload.service';
import { EditProfileService } from '../service/edit-profile.service';
import { onSelectFile } from '../../../../../constant/file-input/file-input';
import { invalidImageError, invalidFileSize, DEFAULT_USER_IMG } from '../../../../../constant/messages/messages';
import { VALIDATION } from '../../../../../constant/validation/forms.validator';
import { DataTransferService } from 'src/app/modules/shared/services/data-transfer.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [EditProfileService]
})
export class EditProfileComponent implements OnInit {
  profilePicURL: string;
  editProfileForm: FormGroup;
  editProfileSubscription: Subscription;
  imageFile;
  profileDetail: any;
  DefaultUrl = DEFAULT_USER_IMG;
  subscription: Subscription;
  constructor(
    private _editProfileService: EditProfileService,
    private _fileUploadService: FileUploadService,
    private _formBuilder: FormBuilder,
    private _dataService: DataTransferService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.getProfileDetail();
  }

  createForm() {
    this.editProfileForm = this._formBuilder.group(
      {
        name: ['', [...VALIDATION.name]],
        email: [''],
      }
    );
  }

  /**
   * @description Getting Admin Profile Detail
   */
  getProfileDetail() {
    this.subscription = this._dataService.profileDetail
      .subscribe(
        (response: any) => {
          if (response) {
            this.profileDetail = response;
            this.editProfileForm.patchValue({
              name: this.profileDetail.name,
              email: this.profileDetail.email
            })
            this.profilePicURL = this.profileDetail.image;
          }
        }
      )
  }

  /**
   * @description Getting controls of editProfileForm
   * @param name 
   */
  getControl(name) {
    return this.editProfileForm.controls[name] as FormControl;
  }

  /**
   * @description This function is called when user change profile pic. Save that file
   * @param event 
   */
  async onSelectFile(event) {
    try {
      let result = await onSelectFile(event);
      this.imageFile = result.file;
      this.profilePicURL = result.url;
    } catch (err) {
      if (err.type) {
        this._editProfileService.showAlert(invalidImageError());
      } else if (err.size) {
        this._editProfileService.showAlert(invalidFileSize())
      }
    }
  }

  /**
   * @description First upload the profile picture then edit the profile
   */
  async editProfile() {
    if (this.editProfileForm.invalid)
      return;
    if (this.imageFile) {

      let data: any = await this._fileUploadService.uploadFile(this.imageFile);
      this.profilePicURL = data.Location;
    }
    let body = { image: this.profilePicURL, ...this.editProfileForm.value };
    body.name = body.name.trim();
    this.editProfileForm.disable();

    delete body.email;
    this.editProfileSubscription = this._editProfileService.editProfile(body).subscribe(
      data => { },
      err => { this.editProfileForm.enable(); }
    );
  }

  ngOnDestroy() {
    if (this.editProfileSubscription) { this.editProfileSubscription.unsubscribe(); }
    if (this.subscription) { this.subscription.unsubscribe(); }
  }
}
