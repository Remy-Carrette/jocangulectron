import { CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css'],
})
export class PieceComponent implements OnInit {
  @Input() color!: 'red' | 'blue' | 'green';
  dragPosition = { x: 0, y: 0 };
  mouseDown = { x: 0, y: 0 };
  @HostListener('document:mousedown', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseDown.x = e.offsetX;
    this.mouseDown.y = e.offsetY;
  }

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

  public onEnded(end: CdkDragEnd) {
    if (
      end.dropPoint.y - this.mouseDown.y <= 200 &&
      end.dropPoint.y + this.mouseDown.y >= 100
    ) {
      if (end.source.element.nativeElement.className.includes('red')) {
        if (
          end.dropPoint.x - this.mouseDown.x <= 350 &&
          end.dropPoint.x + this.mouseDown.x >= 250
        ) {
          this.dragPosition = { x: 250, y: 100 };
          end.source.disabled = true;
        } else {
          this.dragPosition = { x: 400, y: 400 };
        }
      } else if (end.source.element.nativeElement.className.includes('blue')) {
        if (
          end.dropPoint.x - this.mouseDown.x <= 200 &&
          end.dropPoint.x + this.mouseDown.x >= 100
        ) {
          this.dragPosition = { x: 100, y: 100 };
          end.source.disabled = true;
        } else {
          this.dragPosition = { x: 250, y: 400 };
        }
      } else if (end.source.element.nativeElement.className.includes('green')) {
        if (
          end.dropPoint.x - this.mouseDown.x <= 500 &&
          end.dropPoint.x + this.mouseDown.x >= 400
        ) {
          this.dragPosition = { x: 400, y: 100 };
          end.source.disabled = true;
        } else {
          this.dragPosition = { x: 100, y: 400 };
        }
      }
    }
  }
}
