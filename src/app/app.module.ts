import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ruta
import { AppRoutingModule } from './app-routing.module';
// modules
import { PagesModule } from './pages/pages.module';
// components
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './log-in/register.component';
import { FormsModule } from '@angular/forms';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
