import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piece-rouge',
  templateUrl: './piece-rouge.component.html',
  styleUrls: ['./piece-rouge.component.css'],
})
export class PieceRougeComponent {
  dragPosition = { x: 250, y: 400 };

  public onEnded(end: CdkDragEnd) {
    if (
      end.dropPoint.x >= 400 &&
      end.dropPoint.x < 500 &&
      end.dropPoint.y >= 100 &&
      end.dropPoint.y < 200
    ) {
      this.dragPosition = { x: 400, y: 100 };
    }
  }
}
