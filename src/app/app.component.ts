import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  uploadUrl = 'https://evening-anchorage-3159.herokuapp.com/api/';
  uploadResult:any = null;


  public uploader: FileUploader // = new FileUploader({url: this.url});
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;


  constructor() {

    this.uploader = new FileUploader({url: this.uploadUrl});
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      this.uploadResult = {
        'success': true, 'item': item,
        'response': response, 'status': status,
        'headers': headers};
    };
    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.uploadResult = {'success': false, 'item': item,
        'response': response, 'status': status, 'headers': headers};
    }
    this.uploader.onCompleteAll = () => {
      this.handleUploadComplete();
    };
  }

  private handleUploadComplete() {

    console.log('upload compete : ' + this.uploadResult.response);

    if (this.uploadResult.success) {
      console.log('s');
    } else {
      console.log('f');
    }
  }


  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

}
