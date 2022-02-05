import { Point } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PieceComponent } from './piece/piece.component';
import { from, Subject } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';

//Composant qui représente le "plateau" pour le jeu de puzzle, il détient les informations de bases des pièces et des endroit où doivent être placés les pièces.

export interface PieceInformations {
  piecePosition: {
    mouseDown: { x: number; y: number };
    endDropPoint: { x: number; y: number };
  };
  pieceColor: 'red' | 'blue' | 'green';
}

export interface pieceSettings {
  position: { x: number; y: number };
  color: string;
}
@Component({
  selector: 'app-puzzle-game',
  templateUrl: './puzzle-game.component.html',
  styleUrls: ['./puzzle-game.component.css'],
})
export class PuzzleGameComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  isAllCorrect = { blue: false, red: false, green: false };

  sizeOfGoal = 100;

  pieceLocationSubject = new Subject<pieceSettings>();

  goalLocationSubject = new Subject<pieceSettings>();
  /** Objet qui représente les paramètres de départ des cases sur lesquels on doit mettre les pièces */
  goalsSettings: pieceSettings[] = [
    {
      position: { x: 100, y: 100 },
      color: 'blue',
    },
    {
      position: { x: 300, y: 100 },
      color: 'red',
    },
    {
      position: { x: 500, y: 100 },
      color: 'green',
    },
  ];

  /** Objet qui représente les paramètres de départ des pièces qui devront être déplacées. */
  pieceSettings: pieceSettings[] = [
    {
      color: 'red',
      position: { x: 100, y: 400 },
    },
    {
      color: 'blue',
      position: { x: 500, y: 400 },
    },
    {
      color: 'green',
      position: { x: 300, y: 400 },
    },
  ];

  ngOnInit(): void {
    this.randomize();
  }

  private randomize() {
    let startingGoalPosition = [100, 300, 500];
    for (let goal of this.goalsSettings) {
      const randomElement = Math.floor(
        Math.random() * startingGoalPosition.length
      );
      goal.position.x = startingGoalPosition[randomElement];
      startingGoalPosition.splice(randomElement, 1);
    }
  }

  /** Verifie si la pièce à été déposée au bon endroit. */
  public checkIfPieceIsOnGoal(
    piecePosition: {
      mouseDown: Point;
      endDropPoint: Point;
    },
    goalLocation: pieceSettings
  ): boolean {
    if (
      piecePosition.endDropPoint.x - piecePosition.mouseDown.x <=
        goalLocation.position.x + this.sizeOfGoal &&
      piecePosition.endDropPoint.x + piecePosition.mouseDown.x >=
        goalLocation.position.x &&
      piecePosition.endDropPoint.y - piecePosition.mouseDown.y <=
        goalLocation.position.y + this.sizeOfGoal &&
      piecePosition.endDropPoint.y + piecePosition.mouseDown.y >=
        goalLocation.position.y
    ) {
      return true;
    }

    return false;
  }

  public recivePiecePosition($event: PieceInformations) {
    let pieceInformations = $event;
    /**
     * En fonction de la couleur du composant, on verifie si la pièce à été déplacée au bon endroit où non.
     * Si c'est le cas, la pièce est verouillée, sinon on la redéplace à sa position d'origine.
     */

    switch (pieceInformations.pieceColor) {
      case 'red':
        let redGoalIndex = this.goalsSettings.findIndex((element) => {
          return element.color === 'red';
        });
        if (
          this.checkIfPieceIsOnGoal(
            pieceInformations.piecePosition,
            this.goalsSettings[redGoalIndex]
          )
        ) {
          this.movePiece(
            {
              x: this.goalsSettings[redGoalIndex].position.x,
              y: this.goalsSettings[redGoalIndex].position.y,
            },
            'red'
          );
          this.isAllCorrect.red = true;
        } else {
          let redIndex = this.pieceSettings.findIndex((element) => {
            return element.color === 'red';
          });
          this.movePiece(this.pieceSettings[redIndex].position, 'red');
          this.isAllCorrect.red = false;
        }
        break;
      case 'green':
        let greenGoalIndex = this.goalsSettings.findIndex((element) => {
          return element.color === 'green';
        });
        if (
          this.checkIfPieceIsOnGoal(
            pieceInformations.piecePosition,
            this.goalsSettings[greenGoalIndex]
          )
        ) {
          this.movePiece(
            {
              x: this.goalsSettings[greenGoalIndex].position.x,
              y: this.goalsSettings[greenGoalIndex].position.y,
            },
            'green'
          );
          this.isAllCorrect.green = true;
        } else {
          let greenIndex = this.pieceSettings.findIndex((element) => {
            return element.color === 'green';
          });
          this.movePiece(this.pieceSettings[greenIndex].position, 'green');
          this.isAllCorrect.green = false;
        }
        break;
      case 'blue':
        let blueGoalIndex = this.goalsSettings.findIndex((element) => {
          return element.color === 'blue';
        });
        if (
          this.checkIfPieceIsOnGoal(
            pieceInformations.piecePosition,
            this.goalsSettings[blueGoalIndex]
          )
        ) {
          this.movePiece(
            {
              x: this.goalsSettings[blueGoalIndex].position.x,
              y: this.goalsSettings[blueGoalIndex].position.y,
            },
            'blue'
          );
          this.isAllCorrect.blue = true;
        } else {
          let blueIndex = this.pieceSettings.findIndex((element) => {
            return element.color === 'blue';
          });
          this.movePiece(this.pieceSettings[blueIndex].position, 'blue');
          this.isAllCorrect.blue = false;
        }
        break;
    }
    if (
      this.isAllCorrect.blue === true &&
      this.isAllCorrect.red === true &&
      this.isAllCorrect.green === true
    ) {
      this.GameFinished();
    }
  }

  public movePiece(position: Point, color: string) {
    this.pieceLocationSubject.next({
      position: { x: position.x, y: position.y },
      color: color,
    });
  }

  public GameFinished() {
    this.dialog.open(ResultDialogComponent, {
      width: '400px',
    });
    for (let setting of this.pieceSettings)
      this.pieceLocationSubject.next({
        position: { x: setting.position.x, y: setting.position.y },
        color: setting.color,
      });
    this.randomize();
    for (let setting of this.goalsSettings)
      this.goalLocationSubject.next({
        position: { x: setting.position.x, y: setting.position.y },
        color: setting.color,
      });
    this.isAllCorrect.blue =
      this.isAllCorrect.green =
      this.isAllCorrect.red =
        false;
  }
}
