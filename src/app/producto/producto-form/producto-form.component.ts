import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss']
})
export class ProductoFormComponent {



  constructor(public dialogRef:MatDialogRef<ProductoFormComponent>,@ Inject(MAT_DIALOG_DATA)public data:Producto){
    console.log(data)
  }
  agregar=new FormGroup({
    id: new FormControl('',[]),
    descripcion: new FormControl('',[Validators.required]),
    imagen: new FormControl('',[Validators.required]),
    cantidad_minima: new FormControl('',[Validators.required]),
    stock: new FormControl('',[Validators.required]),
    precio_compra: new FormControl('',[Validators.required]),
    precio_venta: new FormControl('',[Validators.required]),
    categoria_id: new FormControl('',[Validators.required]),
    tipo: new FormControl('',[Validators.required])
  })
    get descripcion(){return this.agregar.get('descripcion')}
    get imagen(){return this.agregar.get('imagen')}
    get cantidad_minima(){return this.agregar.get('cantidad_minima')}
    get stock(){return this.agregar.get('stock')}
    get precio_compra(){return this.agregar.get('precio_compra')}
    get precio_venta(){return this.agregar.get('precio_venta')}
    get categoria_id(){return this.agregar.get('categoria_id')}
    get tipo(){return this.agregar.get('tipo')}

    error_descripcion():string{
      if(this.descripcion?.hasError('required'))
        return "Campo Obligatorio"
      return ""
    }
    error_imagen():string{
      if(this.imagen?.hasError('required'))
        return "Campo Obligatorio"
      return ""
    }
    error_cantidad_minima():string{
      if(this.cantidad_minima?.hasError('required'))
        return "Campo Obligatorio"
      return ""
    }
    error_stock():string{
      if(this.stock?.hasError('required'))
        return "Campo Obligatorio"
      return ""
    }
    error_precio_compra():string{
      if(this.precio_compra?.hasError('required'))
        return "Campo Obligatorio"
      return ""
    }
    error_precio_venta():string{
      if(this.precio_venta?.hasError('required'))
        return "Campo Obligatorio"
      return ""
    }
    error_tipo():string{
      if(this.tipo?.hasError('required'))
        return "Campo Obligatorio"
      return ""
    }
    error_categoria_id():string{
      if(this.categoria_id?.hasError('required'))
        return "Campo Obligatorio"
      return ""
    }


}
