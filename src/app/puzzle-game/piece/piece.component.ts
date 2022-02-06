import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, HostListener, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import {
  PieceInformations,
  PuzzleGameComponent,
} from '../puzzle-game.component';
/** Composant qui représente les pièces déplacable par l'utilisateur.*/
@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css'],
})
export class PieceComponent implements OnInit {
  /**
   * @param host Permet de récupérer les informations necessaire pour placer les pièce sur le plateau au demarrage et valider où non si une pièce à été placée au bon endroit.
   */
  constructor(private readonly host: PuzzleGameComponent) {
    //Inscription au Subject qui permet de re positionnner les pièces.
    this.host.pieceLocationSubject.subscribe((v) => {
      let pieceToMoveSettings = v;
      if (this.color === pieceToMoveSettings.color) {
        this.dragPosition = pieceToMoveSettings.position;
      }
    });
  }
  /** Lors de l'initialisation du composant, le choix de la color va définir sa position de départ */
  ngOnInit(): void {
    for (const settings of this.host.pieceSettings) {
      if (this.color === settings.color) {
        this.dragPosition = settings.position;
      }
    }
  }
  /** Permet de définir de quelle couleur sera la pièce instanciée (voir dans le puzzle-game.componenet.html) */
  @Input() color!: 'red' | 'blue' | 'green';

  /**Permet d'envoyer les données de la pièce au plateau au PuzzleGameComponent. */
  @Output() piecePlacedEvent = new EventEmitter<PieceInformations>();

  /**  Objet utilisé par propriété cdkDragFreeDragPosition qui permet de setter la position de la pièce.  */
  dragPosition = { x: 0, y: 0 };

  /** Objet représentant la position de la souris à l'interieur d'une pièce lors d'un clic sur celle-ci. */
  mouseDown = { x: 0, y: 0 };

  /**  Permet de récuprer la position de la souris relativement à une div. */
  @HostListener('document:mousedown', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseDown.x = e.offsetX;
    this.mouseDown.y = e.offsetY;
  }

  /**
   * Se déclenche lorsque l'on à fini le drag and drop.
   * @param end evenement retourné par la propriété cdkDragEnded qui permet de récupérer les coordonnées du pointeur ou le lacher du drag and drop à été effectué.
   */
  public onDragEnded(end: CdkDragEnd): void {
    let pieceInformations: PieceInformations = {
      piecePosition: {
        mouseDown: {
          x: 0,
          y: 0,
        },
        endDropPoint: {
          x: 0,
          y: 0,
        },
      },
      pieceColor: 'red',
    };
    pieceInformations.pieceColor = this.color;
    pieceInformations.piecePosition.mouseDown = this.mouseDown;
    pieceInformations.piecePosition.endDropPoint = end.dropPoint;
    this.piecePlacedEvent.emit(pieceInformations);
  }
}
