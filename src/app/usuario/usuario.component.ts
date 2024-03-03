import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';
import Swal from 'sweetalert2';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioformularioComponent } from './usuarioformulario/usuarioformulario.component';





@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuarios:Usuario[]=[]
  constructor(private usuarioService:UsuarioService,public dialog: MatDialog) { }


  llenar_imagen(nombre:string):string{
    return 'http://localhost:8000/api/usuario/image/'+nombre
  }

  ngOnInit(): void {
    this.usuarioService.listar_usuarios().subscribe(data=>{
      this.usuarios=data
      console.log(data)
    })
  }

  eliminar(item:Usuario):void{

    Swal.fire({
      title: 'Eliminar?',
      text: 'seguro q quiere eliminar al usuario'+item.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si,eliminar',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {


        console.log(item.id)
        this.usuarioService.eliminar_usuario(item.id).subscribe(data=>{
          this.usuarios=data
        })

        Swal.fire('Eliminado!', 'se elimino al usuario'+item.nombre, 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'no se elimino al usuario'+item.nombre, 'error');
      }
    });




  }


  //para alerta de solo aceptar
  successNotification() {
    Swal.fire('Hi', 'We have been informed!', 'success');
  }


  openDialog() {
    const dialogRef = this.dialog.open(UsuarioformularioComponent,{data:this.usuarios[2]});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
