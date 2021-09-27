import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroAplicativosPageRoutingModule } from './cadastro-aplicativos-routing.module';

import { CadastroAplicativosPage } from './cadastro-aplicativos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadastroAplicativosPageRoutingModule
  ],
  declarations: [CadastroAplicativosPage]
})
export class CadastroAplicativosPageModule {}
