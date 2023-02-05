import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloFormComponent } from './components/articulo-form/articulo-form.component';
import { ArticuloListComponent } from './components/articulo-list/articulo-list.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { TicketComponent } from './components/ticket/ticket.component';

const routes: Routes = [
    { path: 'clientes', component: ClienteListComponent },
    { path: 'clientesfrm/:accion/:id', component: ClienteFormComponent },
    { path: 'articulos', component: ArticuloListComponent },
    { path: 'articulosfrm/:accion/:id', component: ArticuloFormComponent },
    { path: 'ticket', component: TicketComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
