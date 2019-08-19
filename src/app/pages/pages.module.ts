import { NgModule } from '@angular/core';
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

@NgModule({
    declarations: [
        PagesComponent,
        DashBoardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadosComponent,
        GraficasDonComponent
    ],
    exports: [
        DashBoardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    imports: [
        SharedModule,
        pagesRoutesAdmin,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule {}
