import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piece-verte',
  templateUrl: './piece-verte.component.html',
  styleUrls: ['./piece-verte.component.css'],
})
export class PieceVerteComponent {
  dragPosition = { x: 400, y: 400 };

  public onEnded(end: CdkDragEnd) {
    if (
      end.dropPoint.x >= 250 &&
      end.dropPoint.x < 350 &&
      end.dropPoint.y >= 100 &&
      end.dropPoint.y < 200
    ) {
      this.dragPosition = { x: 250, y: 100 };
    }
  }
}
