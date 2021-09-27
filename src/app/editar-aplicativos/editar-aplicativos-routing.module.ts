import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarAplicativosPage } from './editar-aplicativos.page';

const routes: Routes = [
  {
    path: '',
    component: EditarAplicativosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarAplicativosPageRoutingModule {}
