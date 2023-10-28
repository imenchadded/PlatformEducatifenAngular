import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  cvInfo : any ;
  displayInfo(info :any){
    this.cvInfo=info;
  }

}
