import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ADMIN_PROFILE } from 'src/app/constant/urls/urls';

@Injectable({
    providedIn: 'root'
})
export class DataTransferService {
    addFaq = new BehaviorSubject<any>(null);
    profileDetail = new BehaviorSubject<any>(null);
    profileData;

    constructor(
        private _http: HttpService
    ) {
    }

    getProfileDetail() {
        return new Observable((observer) => {
            if (this.profileData) {
                observer.next(this.profileData);
            } else {
                this._http.get(ADMIN_PROFILE).subscribe(
                    response => {
                        if (response['statusCode'] === 200) {
                            console.log(response);

                            this.profileData = response.data;
                            observer.next(response.data);
                        } else {
                            observer.next(null);
                        }
                    }, error => {
                        observer.next(null);
                    }
                );
            }
        });
    }
}
