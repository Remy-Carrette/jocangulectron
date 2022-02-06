import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
/**Composant qui représente la fenêtre de victoire, il propose de soit recommencer une partie, soit retrouner au menu principal. */
@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css'],
})
export class ResultDialogComponent {
  constructor(public dialogRef: MatDialogRef<ResultDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
