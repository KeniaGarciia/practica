import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'pokemon',
    loadChildren: () => import('./modules/module.module').then(module => module.ModuleModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
