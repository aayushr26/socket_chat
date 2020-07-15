import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { POPUP_MESSAGES, SOMETHING_WENT_WRONG } from '../../../constant/messages/messages';
import { ConfirmationModalComponent } from '../components/confirmation-modal/confirmation-modal.component';
import { LOGIN } from 'src/app/constant/absolute-routes/absolute-routes';
import { Router } from '@angular/router';
import { DataTransferService } from './data-transfer.service';

@Injectable()
export class UtilityService {
    constructor(
        private _dialog: MatDialog,
        private _snackBar: MatSnackBar,
        private _router: Router,
        private _dataService: DataTransferService
    ) {
    }

    /**
     * Storage Clear after logout
     */
    clearStorage() {
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        this._dataService.profileDetail.next(false);
        this._dataService.profileData = null;
    }

    /**
     * Set Id in local storage
     * @param data Id for reset passwrd
     */
    setAdminId(data) {
        localStorage.setItem('id', data)
    }

    /**
     * Get ID from local storage
     */
    getAdminId() {
        return JSON.parse(localStorage.getItem('id'));
    }

    /**
     * Get Token from local storage
     */
    getAuthToken() {
        return localStorage.getItem('token');
    }

    getUserData(){
        return JSON.parse(localStorage.getItem('userData'))
    }


    /**
     * Method for toastbar
     * @param message Message to show
     */
    showAlert(message) {

        this._snackBar.open(message, 'Close', {
            duration: 5000,
        });
    }
   
    errorAlert(error, type?) {
        let data = {
            title: '',
            message: (error && error.error && error.error.message) ? (error.error.message) : SOMETHING_WENT_WRONG,
            yes: POPUP_MESSAGES.close,
            hideCancelButton: true
        }
        this.openDialog(data).subscribe(success => {
            this._dialog.closeAll();
            if (type == 'unauth') {
                this.clearStorage();
                this._router.navigate([LOGIN]);
            }
        });
    }
    
    openDialog(data) {
        const dialogRef = this._dialog.open(ConfirmationModalComponent, {
            width: '500px',
            data: data
        });
        return dialogRef.afterClosed();
    }
}

