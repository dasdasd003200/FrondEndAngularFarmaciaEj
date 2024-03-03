import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent {

  constructor(public dialogRef:MatDialogRef<ClienteFormComponent>,@ Inject(MAT_DIALOG_DATA)public data:Cliente){
    console.log(data)
  }
}
