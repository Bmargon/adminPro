import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadCrumsComponent } from './bread-crums/bread-crums.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
    declarations: [
        NoPageFoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadCrumsComponent,
        
    ],
    exports: [
        NoPageFoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadCrumsComponent,
    ],
    imports: [ 
        RouterModule,
        CommonModule,
    PipesModule ]
})

export class SharedModule {}
