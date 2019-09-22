import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ruta
import { AppRoutingModule } from './app-routing.module';
// modules
import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// components
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './log-in/register.component';


import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// servicios
import { ServiceModule } from './providers/service.module';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    FormsModule,
    ServiceModule,
    ReactiveFormsModule,
    SweetAlert2Module
    ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
