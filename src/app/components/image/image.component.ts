import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  public source:string = '';

  constructor() {}

  ngOnInit() {
  }

  public updateSource($event: Event) {
      let reader = new FileReader;
      reader.onload = (e: any) => {
          this.source = e.target.result;
      };
      reader.readAsDataURL($event.target['files'][0]);
  }
  

  public openSelectImage(){
    document.getElementById('inputSelectImage').click();
  }

}
