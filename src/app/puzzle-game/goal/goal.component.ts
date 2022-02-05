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
  constructor(private readonly host: PuzzleGameComponent) {
    this.host.goalLocationSubject.subscribe((v) => {
      let pieceToMoveSettings = v;
      if (this.color === pieceToMoveSettings.color) {
        this.myStyle = {
          left: pieceToMoveSettings.position.x + 'px',
          top: pieceToMoveSettings.position.y + 'px',
          'background-color': pieceToMoveSettings.color,
        };
      }
    });
  }

  /** Parmetrage des cases d'objectif en fonction de la color choisie. */
  ngOnInit(): void {
    for (const settings of this.host.goalsSettings) {
      if (this.color === settings.color) {
        this.myStyle = {
          left: settings.position.x + 'px',
          top: settings.position.y + 'px',
          'background-color': settings.color,
        };
      }
    }
  }
  /** Permet de définir de quelle couleur sera la case objectif sera instanciée (voir dans le puzzle-game.component.html) */
  @Input() color!: 'red' | 'blue' | 'green';

  myStyle!: { top: string; left: string; 'background-color': string };
}
