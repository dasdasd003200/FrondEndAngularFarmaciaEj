import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }
  cliente:Cliente[]=[]
  listar_cliente():Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8000/api/cliente')
  }
  eliminar_cliente(id:number):Observable<Cliente[]>{
    return this.http.delete<Cliente[]>('http://localhost:8000/api/cliente/'+id)
  }
}
