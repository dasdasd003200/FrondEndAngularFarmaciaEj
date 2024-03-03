import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import { AlmacenComponent } from './almacen/almacen.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CompraComponent } from './compra/compra.component';
import { ProductoComponent } from './producto/producto.component';
import { ReporteComponent } from './reporte/reporte.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VentaComponent } from './venta/venta.component';
import { HistorialComponent } from './venta/historial/historial.component';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { UsuarioEditarComponent } from './usuario/usuario-editar/usuario-editar.component';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { UsuarioformularioComponent } from './usuario/usuarioformulario/usuarioformulario.component';
import { VentaformComponent } from './venta/ventaform/ventaform.component';
import { CompraFormComponent } from './compra/compra-form/compra-form.component';
import { ProductoFormComponent } from './producto/producto-form/producto-form.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
  declarations: [
    AppComponent,
    AlmacenComponent,
    ClienteComponent,
    CompraComponent,
    ProductoComponent,
    ReporteComponent,
    UsuarioComponent,
    VentaComponent,
    HistorialComponent,
    UsuarioEditarComponent,
    UsuarioformularioComponent,
    VentaformComponent,
    CompraFormComponent,
    ProductoFormComponent,
    ClienteFormComponent,
    CategoriaComponent,
    CategoriaFormComponent,



  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
