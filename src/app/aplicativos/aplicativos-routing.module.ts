import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AplicativosPage } from './aplicativos.page';

const routes: Routes = [
  {
    path: '',
    component: AplicativosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AplicativosPageRoutingModule {}
