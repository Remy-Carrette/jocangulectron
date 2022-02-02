import { CdkDragEnd, Point } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css'],
})
export class PieceComponent implements OnInit {
  @Input() color!: 'red' | 'blue' | 'green';
  dragPosition: Point = { x: 0, y: 0 };
  ngOnInit(): void {
    switch (this.color) {
      case 'red':
        this.dragPosition = { x: 400, y: 400 };
        break;

      case 'blue':
        this.dragPosition = { x: 250, y: 400 };
        break;

      case 'green':
        this.dragPosition = { x: 100, y: 400 };
        break;
    }
  }

  public onEnded(end: CdkDragEnd) {}
}
