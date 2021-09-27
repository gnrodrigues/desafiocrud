import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroAplicativosPage } from './cadastro-aplicativos.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroAplicativosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroAplicativosPageRoutingModule {}
