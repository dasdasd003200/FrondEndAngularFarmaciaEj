import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';
import Swal from 'sweetalert2';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit{
  clientes:Cliente[]=[]
  constructor(private clienteService:ClienteService,public dialog: MatDialog){}

  ngOnInit(): void {
    this.clienteService.listar_cliente().subscribe(data=>{
      this.clientes=data
      console.log(data)
    })
  }

  eliminar(item:Cliente):void{

    Swal.fire({
      title: 'Eliminar?',
      text: 'seguro q quiere eliminar al cliente '+item.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si,eliminar',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {


        console.log(item.id)
        this.clienteService.eliminar_cliente(item.id).subscribe(data=>{
          this.clientes=data
        })

        Swal.fire('Eliminado!', 'se elimino al compra: '+item.id, 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'no se elimino al compra'+item.id, 'error');
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ClienteFormComponent,{data:this.clientes[0]});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
