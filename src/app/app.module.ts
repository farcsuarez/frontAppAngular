import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ArticuloListComponent } from './components/articulo-list/articulo-list.component';
import { ArticuloFormComponent } from './components/articulo-form/articulo-form.component';
import { TicketComponent } from './components/ticket/ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    NavComponent,
    ClienteFormComponent,
    ArticuloListComponent,
    ArticuloFormComponent,
    TicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
