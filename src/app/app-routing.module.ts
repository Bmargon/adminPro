import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './log-in/register.component';


const routes: Routes = [

  { path: '', component: PagesComponent, children: [
      { path: 'dashboard', component: DashBoardComponent },
      { path: 'progress', component: ProgressComponent},
      { path: 'graficas1', component: Graficas1Component},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

    ]},

  { path: 'login', component: LogInComponent},
  { path: 'register', component: RegisterComponent},

  { path: '**', component: NoPageFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
