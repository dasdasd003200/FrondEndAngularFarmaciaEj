import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  categoria:Categoria[]=[]

  listar_categoria():Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:8000/api/categoria')
  }
  eliminar_categoria(id:number):Observable<Categoria[]>{
    return this.http.delete<Categoria[]>('http://localhost:8000/api/categoria/'+id)
  }



}
