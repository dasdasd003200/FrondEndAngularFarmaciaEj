import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  usuario:Usuario[]=[]

  listar_usuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:8000/api/usuario')
  }
  eliminar_usuario(id:number):Observable<Usuario[]>{
    return this.http.delete<Usuario[]>('http://localhost:8000/api/usuario/'+id)
  }
}
