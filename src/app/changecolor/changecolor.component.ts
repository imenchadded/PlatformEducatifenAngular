import { Component } from '@angular/core';

@Component({
  selector: 'app-changecolor',
  templateUrl: './changecolor.component.html',
  styleUrls: ['./changecolor.component.css']
})
export class ChangecolorComponent {
  couleur: string = ''; // Variable pour stocker la couleur

  // Méthode pour réinitialiser la couleur
  resetCouleur() {
    this.couleur = ''; // Réinitialisez la couleur à une chaîne vide
  }
}
