import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra } from '../models/compra';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http:HttpClient) { }
  compra:Compra[]=[]
  listar_compra():Observable<Compra[]>{
    return this.http.get<Compra[]>('http://localhost:8000/api/transaccion')
  }
  eliminar_compra(id:number):Observable<Compra[]>{
    return this.http.delete<Compra[]>('http://localhost:8000/api/transaccion/'+id)
  }
}
