import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-download-form',
  templateUrl: './download-form.component.html'
})
export class DownloadFormComponent implements OnInit {
  title = 'app';
  name = 'Angular 5';
  fileUrl;
  constructor(private sanitizer: DomSanitizer) {  }

  ngOnInit() {
    const data = 'Teste do download!';
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

}
