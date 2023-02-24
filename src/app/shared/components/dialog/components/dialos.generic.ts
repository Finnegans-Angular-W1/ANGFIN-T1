import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogGenericService } from 'src/app/core/services/dialog-generic.service';

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
  
  checkData = false;

  constructor(
    private changeSvc: DialogGenericService,
    public dialogRef: MatDialogRef<DialogGenericoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClickAccept(): void {
    this.checkData = !this.checkData;
    this.changeSvc.changeDataSource(this.checkData)
    this.dialogRef.close();
  }

  onNoClickCancel():void{
    this.changeSvc.changeDataSource(this.checkData)
    this.dialogRef.close();
  }
}
