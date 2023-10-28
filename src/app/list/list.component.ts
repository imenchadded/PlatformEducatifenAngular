import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  nom ='';

  adresse  = '' ; 
   age: number = 0 ;
 
   @Output() information = new EventEmitter<any>();

  getName(){
    return this.nom;
    } 
    getAge(){
      return this.age;
    }
    getAdress(){
      return this.adresse;
    }


  afficherdetail() {
    this.information.emit({
      nom :this.nom,
      age :this.age,
      adresse :this.adresse,
    });
  }
}
  

