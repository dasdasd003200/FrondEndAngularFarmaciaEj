import { Component, OnInit } from '@angular/core';
import { VentaService } from '../services/venta.service';
import { Venta } from '../models/venta';
import Swal from 'sweetalert2';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { VentaformComponent } from './ventaform/ventaform.component';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit{
  ventas:Venta[]=[]
  constructor(private ventaService:VentaService,public dialog: MatDialog){}

  ngOnInit(): void {
    this.ventaService.listar_ventas().subscribe(data=>{
      this.ventas=data
      console.log(data)
    })
  }
  eliminar(item:Venta):void{

    Swal.fire({
      title: 'Eliminar?',
      text: 'seguro q quiere eliminar a la venta '+item.id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si,eliminar',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {


        console.log(item.id)
        this.ventaService.eliminar_venta(item.id).subscribe(data=>{
          this.ventas=data
        })

        Swal.fire('Eliminado!', 'se elimino al venta: '+item.id, 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'no se elimino al venta'+item.id, 'error');
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(VentaformComponent,{data:this.ventas[0]});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }





}
