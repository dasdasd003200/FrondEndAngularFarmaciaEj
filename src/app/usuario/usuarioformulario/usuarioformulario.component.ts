import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuarioformulario',
  templateUrl: './usuarioformulario.component.html',
  styleUrls: ['./usuarioformulario.component.scss']
})
export class UsuarioformularioComponent {

  constructor(public dialogRef:MatDialogRef<UsuarioformularioComponent>,@ Inject(MAT_DIALOG_DATA)public data:Usuario){
    console.log(data)
  }

  agregar=new FormGroup({
    id: new FormControl('',[]),
    nombre: new FormControl('',[Validators.required]),
    apellido: new FormControl('',[Validators.required]),
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    imagen: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required])
  })

  get nombre(){return this.agregar.get('nombre')}
  get apellido(){return this.agregar.get('apellido')}
  get username(){return this.agregar.get('username')}
  get password(){return this.agregar.get('password')}
  get imagen(){return this.agregar.get('imagen')}
  get email(){return this.agregar.get('email')}


  error_nombre():string{
    if(this.nombre?.hasError('required'))
      return "Campo Obligatorio"
    return ""
  }
  error_apellido():string{
    if(this.apellido?.hasError('required'))
      return "Campo Obligatorio"
    return ""
  }
  error_username():string{
    if(this.username?.hasError('required'))
      return "Campo Obligatorio"
    return ""
  }
  error_password():string{
    if(this.password?.hasError('required'))
      return "Campo Obligatorio"
    return ""
  }
  error_imagen():string{
    if(this.imagen?.hasError('required'))
      return "Campo Obligatorio"
    return ""
  }
  error_email():string{
    if(this.email?.hasError('required'))
      return "Campo Obligatorio"
    return ""
  }

}
