import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LoaderService } from './loader.service';
import { trimData } from 'src/app/constant/messages/messages';


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private apiUrl: string;

    constructor(
        private http: HttpClient,
        private _loaderService: LoaderService
    ) {
        this.apiUrl = environment.url;
    }


    post<T>(url, data, loader = true): Observable<Common.ApiResponse<T>> {
        if (loader) {
            this._loaderService.loader.next(loader);
        }
        data ? trimData(data) : data;
        return this.http.post<any>(this.apiUrl + url, data);
    }


    put<T>(url, data?, loader = true): Observable<Common.ApiResponse<T>> {
        if (loader) {
            this._loaderService.loader.next(loader);
        }
        data ? trimData(data) : data;
        return this.http.put<Common.ApiResponse<T>>(this.apiUrl + url, data);
    }



    patch<T>(url, data, loader = true): Observable<Common.ApiResponse<T>> {
        if (loader) {
            this._loaderService.loader.next(loader);
        }
        data ? trimData(data) : data;
        return this.http.patch<Common.ApiResponse<T>>(this.apiUrl + url, data);
    }



    delete(url, query, loader = true): Observable<Common.ApiResponse> {
        if (loader) {
            this._loaderService.loader.next(loader);
        }
        return this.http.delete<Common.ApiResponse>(this.apiUrl + url, { params: query });
    }

    get<T>(url, httpParams?: any, loader = true): Observable<Common.ApiResponse<T>> {
        if (loader) {
            this._loaderService.loader.next(loader);
        }
        for (let item in httpParams) {
            if (httpParams[item] === '' || httpParams[item] === undefined || httpParams[item] === null) {
                delete httpParams[item];
            }
        }
        const header = {};
        if (httpParams) {
            header['params'] = httpParams;
        }
        header ? trimData(header) : header;

        return this.http.get<Common.ApiResponse<T>>(this.apiUrl + url, header);
    }


    getLocal<T>(url, httpParams?: any, loader = true): Observable<Common.ApiResponse<T>> {
        if (loader) {
            this._loaderService.loader.next(loader);
        }
        for (let item in httpParams) {
            if (httpParams[item] === '' || httpParams[item] === undefined || httpParams[item] === null) {
                delete httpParams[item];
            }
        }
        const header = {};
        if (httpParams) {
            header['params'] = httpParams;
        }
        header ? trimData(header) : header;
        return this.http.get<Common.ApiResponse<T>>(url, header);
    }

    
    getCategory<T>(url, httpParams?: any): Observable<Common.ApiResponse<T>> {

        for (let item in httpParams) {
            if (httpParams[item] === '' || httpParams[item] === undefined || httpParams[item] === null) {
                delete httpParams[item];
            }
        }
        const header = {};
        if (httpParams) {
            header['params'] = httpParams;
        }
        header ? trimData(header) : header;
        return this.http.get<Common.ApiResponse<T>>(this.apiUrl + url, header);
    }


}
