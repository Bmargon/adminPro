import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { FormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { pagesRoutesAdmin } from './pages.routes';
import { IncrementadosComponent } from '../components/incrementados/incrementados.component';
import { GraficasDonComponent } from '../components/graficas-don/graficas-don.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

// pipe
import { PipesModule } from '../pipes/pipes.module';

import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashBoardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadosComponent,
        GraficasDonComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        ModalUploadComponent
    ],
    exports: [
        DashBoardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ChartsModule,
        PipesModule,
        pagesRoutesAdmin
    ]
})
export class PagesModule {}
