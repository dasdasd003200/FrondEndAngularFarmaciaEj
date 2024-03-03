import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent {

constructor(public dialogRef:MatDialogRef<CategoriaFormComponent>,@ Inject(MAT_DIALOG_DATA)public data:Categoria){
  console.log(data)
}

}
