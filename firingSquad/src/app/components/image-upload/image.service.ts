import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
//import { Headers, Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';

// @Injectable()
// export class ImageService {

//     constructor(private http: Http){}

//     public uploadImage(image: File): Observable<Response> {
//         const formData = new FormData();

//         formData.append('image', image);

//         return this.http.post('/api/v1/image-upload', formData);
//     }
// }



//need to find my access key ID
uploadFile(file) {
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIASO7WMQLMILFJSZWY',
              secretAccessKey: '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',
              region: 'us-east-2'
          }
      );
      const params = {
          Bucket: 'myfirstbucketsquad',
          Key: this.FOLDER + file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
      bucket.upload(params, function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });
//for upload progress
/*bucket.upload(params).on('httpUploadProgress', function (evt) {
          console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
      }).send(function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });*/
}
const bucket = new S3(
    {
        accessKeyId: 'YOUR-ACCESS-KEY-ID',
        secretAccessKey: 'YOUR-SECRET-ACCESS-KEY',
        region: 'YOUR-REGION'
    }
);
const params = {
    Bucket: 'YOUR-BUCKET-NAME',
    Key: this.FOLDER + file.name,
    Body: file,
    ACL: 'public-read',
    ContentType: contentType
};
bucket.upload(params, function (err, data) {
    if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
    }
    console.log('Successfully uploaded file.', data);
    return true;
});
