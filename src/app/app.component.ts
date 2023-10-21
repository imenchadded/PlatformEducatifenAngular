import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imen-application-angular';
  nom:string = 'Imen Chadded';
  age :number = 23;
  adresse : string = 'sahloul' ;
  getName(){
    return this.nom;
  }
  modifier(newName : string){
    this.nom=newName;
  }
}
