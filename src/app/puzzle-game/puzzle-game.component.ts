import { Component, OnInit } from '@angular/core';
//Composant qui représente le "plateau" pour le jeu de puzzle, il détient les informations de bases des pièces et des endroit où doivent être placés les pièces.
@Component({
  selector: 'app-puzzle-game',
  templateUrl: './puzzle-game.component.html',
  styleUrls: ['./puzzle-game.component.css'],
})
export class PuzzleGameComponent {
  /** Objet qui représente les paramètres de départ des cases sur lesquels on doit mettre les pièces */
  goalsSettings = {
    blue: {
      top: 100,
      left: 100,
      'background-color': 'blue',
    },
    red: {
      top: 100,
      left: 300,
      'background-color': 'red',
    },
    green: {
      top: 100,
      left: 500,
      'background-color': 'green',
    },
  };
  /** Objet qui représente les paramètres de départ des pièces qui devront être déplacées. */
  pieceSettings = {
    red: { top: 400, left: 100 },
    blue: { top: 400, left: 300 },
    green: { top: 400, left: 500 },
  };
}
