import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../services/categoria.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  categorias:Categoria[]=[]

  constructor(private categoriaService:CategoriaService,public dialog:MatDialog){}
  ngOnInit(): void {

    this.categoriaService.listar_categoria().subscribe(data=>{
      this.categorias=data
      console.log(data)
    })
  }

  eliminar(item:Categoria):void{

    Swal.fire({
      title: 'Eliminar?',
      text: 'seguro q quiere eliminar a la categoria '+item.tipo,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si,eliminar',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {


        console.log(item.id)
        this.categoriaService.eliminar_categoria(item.id).subscribe(data=>{
          this.categorias=data
        })

        Swal.fire('Eliminado!', 'se elimino al categoria: '+item.tipo, 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'no se elimino al categoria: '+item.tipo, 'error');
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CategoriaFormComponent,{data:this.categorias[0]});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
