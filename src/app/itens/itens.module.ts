import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { ItensRoutingModule } from './itens-routing.module';
import { ItensComponent } from './itens/itens.component';







@NgModule({
  declarations: [
    ItensComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    ItensRoutingModule,
    SharedModule
  ]
})
export class ItensModule { }
