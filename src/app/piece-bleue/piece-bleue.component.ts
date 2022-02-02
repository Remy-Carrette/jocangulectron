import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piece-bleue',
  templateUrl: './piece-bleue.component.html',
  styleUrls: ['./piece-bleue.component.css'],
})
export class PieceBleueComponent {
  dragPosition = { x: 100, y: 400 };

  public onEnded(end: CdkDragEnd) {
    if (
      end.dropPoint.x >= 100 &&
      end.dropPoint.x < 200 &&
      end.dropPoint.y >= 100 &&
      end.dropPoint.y < 200
    ) {
      this.dragPosition = { x: 100, y: 100 };
    }
  }
}
