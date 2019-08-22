import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PagesComponent } from './pages.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const pagesRoutes: Routes = [
    {   path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashBoardComponent },
            { path: 'progress', component: ProgressComponent},
            { path: 'graficas1', component: Graficas1Component},
            { path: 'account_settings', component: AccountSettingsComponent},
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule]
  })

export class pagesRoutesAdmin { }
