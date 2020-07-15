import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import { environment } from '../../../../environments/environment';
import { LoaderService } from './loader.service';
import { ToastService } from 'src/app/components/toast-notification/toast.service';

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {
    bucket: S3;
    folderName: string = 'brightside';
    constructor(
        private _loaderService: LoaderService,
        private _toastService: ToastService
    ) {
        this.bucket = new S3(
            {
                accessKeyId: environment.config.AWS_ACCESS_KEY,
                secretAccessKey: environment.config.AWS_SECRET_KEY,
                region: environment.config.AWS_REGION,
            }
        );
    }
    async uploadFile(fileToUpload: File) {
        try {
            const params = {
                Bucket: environment.config.AWS_BUCKET,
                Key: `${this.folderName}/${fileToUpload.name}` || `${this.folderName}/${new Date().getTime()}.png`,
                Body: fileToUpload,
                ACL: 'public-read'
            };
            this._loaderService.loader.next(true);
            return new Promise((resolve, reject) => {
                this.bucket.upload(params, (err, data) => {
                    if (err) {
                        this._toastService.error(err);
                        this._loaderService.loader.next(false);
                        reject(err);
                        return false;
                    } else {
                        this._loaderService.loader.next(false);
                        resolve(data);
                    }
                }).on('httpUploadProgress', (progress) => {

                });

            });
        } catch (err) {
            this._loaderService.loader.next(false);
            console.error(err.message);
        }
    }

    /**
  * Upload base64 files on S3
  * @param base64FileValue Object
  * @param fileType Object
  * @param fileName Object
  */
    uploadBase64(base64FileValue, fileName) {
        const buf = new Buffer(base64FileValue.replace(/^data:\w+\/\w+;base64,/, ''), 'base64');
        this._loaderService.loader.next(true);
        const params = {
            Bucket: environment.config.AWS_BUCKET,
            Key: fileName,
            Body: buf,
            ContentEncoding: 'base64',
            ACL: 'public-read'
        };
        const that = this;
        return new Promise((resolve, reject) => {
            this.bucket.upload(params, function (err, data) {
                if (err) {
                    that._loaderService.loader.next(false);
                    reject(err);
                    return false;
                } else {
                    that._loaderService.loader.next(false);
                    resolve(data);
                }
            });
        });
    }
}
