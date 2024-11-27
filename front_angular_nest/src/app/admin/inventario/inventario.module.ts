import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './components/producto/producto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ClienteComponent } from './components/cliente/cliente.component';



@NgModule({
  declarations: [
    ProductoComponent,
    CategoriaComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InventarioModule { }
