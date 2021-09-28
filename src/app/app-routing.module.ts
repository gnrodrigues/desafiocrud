import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'pessoas',
    loadChildren: () => import('./pessoas/pessoas.module').then( m => m.PessoasPageModule)
  },
  {
    path: 'aplicativos',
    loadChildren: () => import('./aplicativos/aplicativos.module').then( m => m.AplicativosPageModule)
  },
  {
    path: 'cadastro-aplicativos',
    loadChildren: () => import('./cadastro-aplicativos/cadastro-aplicativos.module').then( m => m.CadastroAplicativosPageModule)
  },
  {
    path: 'editar-aplicativos/:id',
    loadChildren: () => import('./editar-aplicativos/editar-aplicativos.module').then( m => m.EditarAplicativosPageModule)
  },

  

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
