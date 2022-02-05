import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

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
