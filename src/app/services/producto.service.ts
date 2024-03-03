import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }
  producto:Producto[]=[]
  listar_producto():Observable<Producto[]>{
    return this.http.get<Producto[]>('http://localhost:8000/api/producto',)
  }
  listar_categoria():Observable<Producto[]>{
    return this.http.get<Producto[]>('http://localhost:8000/api/categoria')
  }

  eliminar_producto(id:number):Observable<Producto[]>{
    return this.http.delete<Producto[]>('http://localhost:8000/api/producto/'+id)
  }



}
