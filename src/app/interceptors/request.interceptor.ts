import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UtilityService } from '../modules/shared/services/utility.service';
import { LoaderService } from '../modules/shared/services/loader.service';
import { LOGIN } from '../constant/absolute-routes/absolute-routes';
import { ToastService } from '../components/toast-notification/toast.service';
import { TABLE_MESSAGES } from '../constant/messages/messages'
import { MatDialog } from '@angular/material';
// import { ConfirmationModalComponent } from '../modules/shared/components/confirmation-modal/confirmation-modal.component';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private _utilityService: UtilityService,
        private _loaderService: LoaderService,
        private _toastService: ToastService,

    ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let headers = {};
        const token = this._utilityService.getAuthToken();

        headers['authorization'] = 'Bearer ' + token;


        headers['accept-language'] = 'en';
        headers['platform'] = 'WEB';
        headers['api_key'] = '1234'


        request = request.clone({
            setHeaders: headers
        });

        return next.handle(request).pipe(
            tap(
                (data) => {
                    if (data instanceof HttpResponse) {
                        this._loaderService.loader.next(false);
                    }
                },
                (err: any) => {
                    this._loaderService.loader.next(false);
                    if (err instanceof HttpErrorResponse) {

                        if (err.status !== 401) {
                            this._utilityService.errorAlert(err);
                        }
                        if (err.status === 401 || err.error.responseType == 'UNAUTHORIZED') {
                            this._utilityService.errorAlert(err,'unauth');
                        }
                        else {
                            this.internetError(err);
                            throwError(err);
                        }
                    }
                }
            ));
    }

    internetError(error: any) {
        this._loaderService.loader.next(false);
        if (error.status == 0) {
            if (!navigator.onLine) {
                this._toastService.error(TABLE_MESSAGES.NO_INTERNET);
                //     this._matDialog.closeAll();
                //     this._matDialog.open(ConfirmationModalComponent, {
                //     width: '500px',
                //         data: {
                //             title:'',
                //             message: 'No Internet Connection .',
                //             yes: POPUP_MESSAGES.close,
                //             hideCancelButton: true
                //         }
                // });
            }
            else {
                this._toastService.error('Internal Server Error.');
            }
        }
    }

}
