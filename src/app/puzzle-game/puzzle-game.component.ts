import { Point } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';

/** Interface utilisée lors de la reception de l'evenement piecePlacedEvent des composants de pieces */
export interface PieceInformations {
  piecePosition: {
    mouseDown: Point; //Pffset de la souris par rapport à la pièce qui à été selectionnée.
    endDropPoint: Point; // Position de la souris dans la fenêtre lors de la fin du DragDrop.
  };
  pieceColor: 'red' | 'blue' | 'green';
}

/** Interface qui symbolise les informations des pièces et des goal de l'exercice */
export interface pieceSettings {
  position: Point;
  color: string;
}
/**Composant qui représente le "plateau" de l'exercice, il détient les informations de bases des pièces et des goals. */
@Component({
  selector: 'app-puzzle-game',
  templateUrl: './puzzle-game.component.html',
  styleUrls: ['./puzzle-game.component.css'],
})
export class PuzzleGameComponent implements OnInit {
  /** Objet qui permet de verifier si les pièces sont au bon endroit sur les socles. */
  isAllCorrect = { blue: false, red: false, green: false };
  /** variable qui permet de définir la taille des goals */
  sizeOfGoal = 100;
  /** Subject auquel le composant de piece est inscrit, il permet de transmettre la position à laquelle la pièce doit être (sur le goal de la même couleur, ou à sa position inititale.) */
  pieceLocationSubject = new Subject<pieceSettings>();

  /** Subject auquel le composant de goal est inscrit, il permet de transmettre la position à laquelle le goal doit être placé en début de partie (et de manière aléatoire à cahque nouvelle partie) */
  goalLocationSubject = new Subject<pieceSettings>();
  /** Objet qui représente les paramètres de départ des socles sur lesquels les pièces doivent être placées. */
  goalSettings: pieceSettings[] = [
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

  /** Le constructeur prend en argument un MatDialog qui sera affiché lorsque toute les pièces sont sur leurs socles. */
  constructor(public dialog: MatDialog) {}
  /** Lors de l'initalisation du composant, on va randomiser la position des goals */
  ngOnInit(): void {
    this.randomize();
  }
  /**Fonction qui permet de modifier la liste de goalSettings, elle est appelé à l'initialisation du composant et à chaque nouvelle partie. */
  private randomize() {
    let startingGoalPosition = [100, 300, 500];
    for (let goal of this.goalSettings) {
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
    //Condition qui permet de verifier que la pièce (piecePosition) à été déposé dans le goal (goalLocation)
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
  /**
   * En fonction de la couleur du composant, on verifie si la pièce à été déplacée au bon endroit où non.
   * Si c'est le cas, la pièce est déplacée sur son socle, sinon on la redéplace à sa position d'origine.
   * @arg $event
   */
  public recivePiecePosition($event: PieceInformations) {
    let pieceInformations = $event;

    switch (pieceInformations.pieceColor) {
      case 'red':
        let redGoalIndex = this.goalSettings.findIndex((element) => {
          return element.color === 'red';
        });
        if (
          this.checkIfPieceIsOnGoal(
            pieceInformations.piecePosition,
            this.goalSettings[redGoalIndex]
          )
        ) {
          this.movePiece(
            {
              x: this.goalSettings[redGoalIndex].position.x,
              y: this.goalSettings[redGoalIndex].position.y,
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
        let greenGoalIndex = this.goalSettings.findIndex((element) => {
          return element.color === 'green';
        });
        if (
          this.checkIfPieceIsOnGoal(
            pieceInformations.piecePosition,
            this.goalSettings[greenGoalIndex]
          )
        ) {
          this.movePiece(
            {
              x: this.goalSettings[greenGoalIndex].position.x,
              y: this.goalSettings[greenGoalIndex].position.y,
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
        let blueGoalIndex = this.goalSettings.findIndex((element) => {
          return element.color === 'blue';
        });
        if (
          this.checkIfPieceIsOnGoal(
            pieceInformations.piecePosition,
            this.goalSettings[blueGoalIndex]
          )
        ) {
          this.movePiece(
            {
              x: this.goalSettings[blueGoalIndex].position.x,
              y: this.goalSettings[blueGoalIndex].position.y,
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
  /** Fonction qui cast la nouvelle valeur de la pièce défini par les arguments de la fonction. */
  public movePiece(position: Point, color: string) {
    this.pieceLocationSubject.next({
      position: { x: position.x, y: position.y },
      color: color,
    });
  }
  /** Fonction qui affiche la fenêtre de dialogue de victoire, qui replace les pièces, les goals et remet les variables isAllCorrect à false. */
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
    for (let setting of this.goalSettings)
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
