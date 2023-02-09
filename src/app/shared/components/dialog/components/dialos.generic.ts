import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  data: string;
  title: string;
}

@Component({
  selector: 'app-dialog-generico',
  templateUrl: './dialog.generic.component.html',
  styleUrls: ['./dialog.generic.component.scss'],
})
export class DialogGenericoComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogGenericoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
