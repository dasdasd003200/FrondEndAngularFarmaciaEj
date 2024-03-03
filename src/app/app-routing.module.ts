import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentaComponent } from './venta/venta.component';
import { HistorialComponent } from './venta/historial/historial.component';
import { CompraComponent } from './compra/compra.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { ProductoComponent } from './producto/producto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReporteComponent } from './reporte/reporte.component';
import { CategoriaComponent } from './categoria/categoria.component';


const routes: Routes = [
  {path:'venta',component:VentaComponent},
  {path:'historial',component:HistorialComponent},
  {path:'compra',component:CompraComponent},
  {path:'almacen',component:AlmacenComponent},
  {path:'producto',component:ProductoComponent},
  {path:'cliente',component:ClienteComponent},
  {path:'usuario',component:UsuarioComponent},
  {path:'reporte',component:ReporteComponent},
  {path:'categoria',component:CategoriaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
