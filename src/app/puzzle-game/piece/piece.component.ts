import { CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { PuzzleGameComponent } from '../puzzle-game.component';
/**
 * Représente les pièces déplacable par l'utilisateur.
 */
@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css'],
})
export class PieceComponent implements OnInit {
  /**
   * @param host Permet de récupérer les informations necessaire pour placer les pièce sur le plateau au demarrage et valider où non si une pièce à été placée au bon endroit.
   */
  constructor(private readonly host: PuzzleGameComponent) {}

  /** Permet de définir de quelle couleur sera la pièce instanciée (voir dans le puzzle-game.componenet.html) */
  @Input() color!: 'red' | 'blue' | 'green';

  /**  Objet utilisé par propriété cdkDragFreeDragPosition qui permet de setter la position de la pièce.  */
  dragPosition: { x: number; y: number } = { x: 0, y: 0 };

  /** Objet représentant la position de la souris à l'interieur d'une pièce lors d'un clic sur celle-ci. */
  mouseDown: { x: number; y: number } = { x: 0, y: 0 };

  /**  Permet de récuprer la position de la souris relativement à une div. */
  @HostListener('document:mousedown', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseDown.x = e.offsetX;
    this.mouseDown.y = e.offsetY;
  }
  /** Lors de l'initialisation du composant, le choix de la color va définir sa position de départ */
  ngOnInit(): void {
    switch (this.color) {
      case 'red':
        this.dragPosition = {
          x: this.host.pieceSettings['red'].left,
          y: this.host.pieceSettings['red'].top,
        };
        break;

      case 'blue':
        this.dragPosition = {
          x: this.host.pieceSettings['blue'].left,
          y: this.host.pieceSettings['blue'].top,
        };
        break;

      case 'green':
        this.dragPosition = {
          x: this.host.pieceSettings['green'].left,
          y: this.host.pieceSettings['green'].top,
        };
        break;
    }
  }

  /** Verifie si la pièce à été déposée au bon endroit. */
  public checkIfPieceIsOnGoal(
    end: CdkDragEnd,
    goalLocation: { top: number; left: number; 'background-color': string }
  ): boolean {
    console.log(end, this.mouseDown);
    if (
      end.dropPoint.x - this.mouseDown.x <= goalLocation.left + 100 &&
      end.dropPoint.x + this.mouseDown.x >= goalLocation.left &&
      end.dropPoint.y - this.mouseDown.y <= 200 &&
      end.dropPoint.y + this.mouseDown.y >= 100
    ) {
      console.log("ça c'est bien passé");
      return true;
    }
    console.log("ça c'est pas passé");
    return false;
  }

  /**
   * Se déclenche lorsque l'on à fini le drag and drop.
   * @param end evenement retourné par la propriété cdkDragEnded qui permet de récupérer les coordonnées du pointeur ou le lacher du drag and drop à été effectué.
   */
  public onEnded(end: CdkDragEnd) {
    /**
     * En fcontion de la couleur du composant, on verifie si la pièce à été déplacée au bon endroit où non.
     * Si c'est le cas, la pièce est verouillée, sinon on la redéplace à sa position d'origine.
     */
    console.log(this.color);
    switch (this.color) {
      case 'red':
        if (this.checkIfPieceIsOnGoal(end, this.host.goalsSettings.red)) {
          this.dragPosition = {
            x: this.host.goalsSettings.red.left,
            y: this.host.goalsSettings.red.top,
          };
          end.source.disabled = true;
        } else {
          this.dragPosition = {
            x: this.host.pieceSettings.red.left,
            y: this.host.pieceSettings.red.top,
          };
        }
        break;
      case 'blue':
        if (this.checkIfPieceIsOnGoal(end, this.host.goalsSettings.blue)) {
          this.dragPosition = {
            x: this.host.goalsSettings.blue.left,
            y: this.host.goalsSettings.blue.top,
          };
          end.source.disabled = true;
        } else {
          this.dragPosition = {
            x: this.host.pieceSettings.blue.left,
            y: this.host.pieceSettings.blue.top,
          };
        }
        break;
      case 'green':
        if (this.checkIfPieceIsOnGoal(end, this.host.goalsSettings.green)) {
          this.dragPosition = {
            x: this.host.goalsSettings.green.left,
            y: this.host.goalsSettings.green.top,
          };
          end.source.disabled = true;
        } else {
          this.dragPosition = {
            x: this.host.pieceSettings.green.left,
            y: this.host.pieceSettings.green.top,
          };
        }
        break;
    }
  }
}
