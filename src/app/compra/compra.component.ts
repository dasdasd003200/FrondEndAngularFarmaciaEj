import { Component, OnInit } from '@angular/core';
import { Compra } from '../models/compra';
import { CompraService } from '../services/compra.service';
import Swal from 'sweetalert2';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CompraFormComponent } from './compra-form/compra-form.component';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit{
  compras:Compra[]=[]
  constructor(private compraService:CompraService,public dialog: MatDialog){}

  ngOnInit(): void {
    this.compraService.listar_compra().subscribe(data=>{
      this.compras=data
      console.log(data)
    })
  }

  eliminar(item:Compra):void{

    Swal.fire({
      title: 'Eliminar?',
      text: 'seguro q quiere eliminar a la COMPRA '+item.id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si,eliminar',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {


        console.log(item.id)
        this.compraService.eliminar_compra(item.id).subscribe(data=>{
          this.compras=data
        })

        Swal.fire('Eliminado!', 'se elimino al compra: '+item.id, 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'no se elimino al compra'+item.id, 'error');
      }
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(CompraFormComponent,{data:this.compras[0]});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }




}
