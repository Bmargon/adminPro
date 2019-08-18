import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LogInComponent } from './log-in/log-in.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { RegisterComponent } from './log-in/register.component';


const routes: Routes = [
  { path: 'login', component: LogInComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
