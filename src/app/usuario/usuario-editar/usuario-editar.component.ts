import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.scss']
})
export class UsuarioEditarComponent {

  constructor(public dialogRef:MatDialogRef<UsuarioEditarComponent>,@ Inject(MAT_DIALOG_DATA) public data:Usuario){
    console.log("dasdasd")
    console.log(12)
    console.log(data)

  }


}
