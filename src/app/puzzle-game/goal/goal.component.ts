import { Component, Input, OnInit } from '@angular/core';
import { PuzzleGameComponent } from '../puzzle-game.component';
/**
 * Composant qui représente la destination d'un pièce.
 */
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  /**
   * @param host Permet de récupérer les informations necessaire pour placer les pièce sur le plateau au demarrage et valider où non si une pièce à été placée au bon endroit.
   */
  constructor(private readonly host: PuzzleGameComponent) {}
  /** Permet de définir de quelle couleur sera la case objectif sera instanciée (voir dans le puzzle-game.component.html) */
  @Input() color!: 'red' | 'blue' | 'green';
  /**
   *
   */
  myStyle!: { top: string; left: string; 'background-color': string };
  /** Parmetrage des cases d'objectif en fonction de la color choisie. */
  ngOnInit(): void {
    switch (this.color) {
      case 'red':
        this.myStyle = {
          top: this.host.goalsSettings['red'].top + 'px',
          'background-color':
            this.host.goalsSettings['red']['background-color'],
          left: this.host.goalsSettings['red'].left + 'px',
        };
        break;

      case 'blue':
        this.myStyle = {
          top: this.host.goalsSettings['blue'].top + 'px',
          'background-color':
            this.host.goalsSettings['blue']['background-color'],
          left: this.host.goalsSettings['blue'].left + 'px',
        };
        break;

      case 'green':
        this.myStyle = {
          top: this.host.goalsSettings['green'].top + 'px',
          'background-color':
            this.host.goalsSettings['green']['background-color'],
          left: this.host.goalsSettings['green'].left + 'px',
        };
        break;
    }
  }
}
