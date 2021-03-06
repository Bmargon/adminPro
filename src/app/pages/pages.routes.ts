import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PagesComponent } from './pages.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProfileComponent } from './profile/profile.component';

// guard
import { LoginGuardGuard } from '../providers/guards/login-guard.guard';


const pagesRoutes: Routes = [
    {   path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'dashboard', component: DashBoardComponent },
            { path: 'progress', component: ProgressComponent},
            { path: 'graficas1', component: Graficas1Component},
            { path: 'promesas', component: PromesasComponent},
            { path: 'rxjs', component: RxjsComponent},
            { path: 'account_settings', component: AccountSettingsComponent},
            { path: 'perfil', component: ProfileComponent, data: {titulo: 'Perfil de usuario'}},
            // mantenimìento
            { path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Mantenimiento de usuarios'}},
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule]
  })

export class pagesRoutesAdmin { }
