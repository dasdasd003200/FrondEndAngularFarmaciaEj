import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Compra } from 'src/app/models/compra';

@Component({
  selector: 'app-compra-form',
  templateUrl: './compra-form.component.html',
  styleUrls: ['./compra-form.component.scss']
})
export class CompraFormComponent {

constructor(public dialogRef:MatDialogRef<CompraFormComponent>,@ Inject(MAT_DIALOG_DATA)public data:Compra){
  console.log(data)
}

}
