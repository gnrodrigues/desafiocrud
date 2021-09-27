import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarAplicativosPageRoutingModule } from './editar-aplicativos-routing.module';

import { EditarAplicativosPage } from './editar-aplicativos.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    EditarAplicativosPageRoutingModule
  ],
  declarations: [EditarAplicativosPage]
})
export class EditarAplicativosPageModule {}
