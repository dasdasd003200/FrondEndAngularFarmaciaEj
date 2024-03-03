import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Venta } from 'src/app/models/venta';

@Component({
  selector: 'app-ventaform',
  templateUrl: './ventaform.component.html',
  styleUrls: ['./ventaform.component.scss']
})
export class VentaformComponent {


  constructor(public dialogRef:MatDialogRef<VentaformComponent>,@ Inject (MAT_DIALOG_DATA)public data:Venta){
    console.log(data)
  }



}
