import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';
import Swal from 'sweetalert2';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ProductoFormComponent } from './producto-form/producto-form.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  productos:Producto[]=[]
  categorias:Producto[]=[]

  constructor(private productoService:ProductoService,public dialog: MatDialog){}

  ngOnInit(): void {
    this.productoService.listar_producto().subscribe(data=>{
      this.productos=data
      console.log(data)

    })
    this.productoService.listar_categoria().subscribe(data=>{
    this.categorias=data
      console.log(data)
    })
  }


  eliminar_pro(item:Producto):void{

    Swal.fire({
      title: 'Eliminar?',
      text: 'seguro q quiere eliminar a la producto '+item.descripcion,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si,eliminar',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {


        console.log(item.id)
        this.productoService.eliminar_producto(item.id).subscribe(data=>{
          this.productos=data
        })

        Swal.fire('Eliminado!', 'se elimino al producto: '+item.id, 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'no se elimino al producto'+item.id, 'error');
      }
    });
  }


  openDialog() {
    const dialogRef = this.dialog.open(ProductoFormComponent,{data:this.productos[0]});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
