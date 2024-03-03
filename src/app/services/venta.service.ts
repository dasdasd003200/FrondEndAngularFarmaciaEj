import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http:HttpClient) { }
    venta:Venta[]=[]

  listar_ventas():Observable<Venta[]>{
      return this.http.get<Venta[]>('http://localhost:8000/api/venta')
  }

  eliminar_venta(id:number):Observable<Venta[]>{
    return this.http.delete<Venta[]>('http://localhost:8000/api/venta/'+id)
  }


}


