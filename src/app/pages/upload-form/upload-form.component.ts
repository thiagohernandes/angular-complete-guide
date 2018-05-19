import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import {HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent {

  selectedFiles: FileList;
  currentFileUpload: File;
  uploading:boolean = false;

  constructor(private uploadService: UploadService) {
    this.uploading = false;
  }
   
 selectFile(event) {
   this.selectedFiles = event.target.files;
 }
 
 upload() {
   this.uploading = true;
   this.currentFileUpload = this.selectedFiles.item(0);
   this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
    if (event instanceof HttpResponse) {
       console.log('File is completely uploaded!');
       this.uploading = false;
     }
   });
   this.selectedFiles = undefined;
 }

}
