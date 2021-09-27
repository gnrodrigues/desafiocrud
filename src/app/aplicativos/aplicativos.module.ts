import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AplicativosPageRoutingModule } from './aplicativos-routing.module';

import { AplicativosPage } from './aplicativos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AplicativosPageRoutingModule
  ],
  declarations: [AplicativosPage]
})
export class AplicativosPageModule {}
