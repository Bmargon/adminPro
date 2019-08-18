import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ruta
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadCrumsComponent } from './shared/bread-crums/bread-crums.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './log-in/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    NoPageFoundComponent,
    DashBoardComponent,
    ProgressComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadCrumsComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
